from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from drf_spectacular.utils import extend_schema, OpenApiParameter

from apps.applications.models import DeveloperApplication
from .models import ClientCompany
from .serializers import (
    ClientLoginSerializer,
    ClientLoginResponseSerializer,
    TalentPoolSerializer
)


@method_decorator(csrf_exempt, name='dispatch')
class ClientLoginView(APIView):
    """
    API endpoint for client company login.
    Returns an access token for accessing the talent pool.
    """
    permission_classes = [AllowAny]
    authentication_classes = []  # Disable authentication for login

    @extend_schema(
        request=ClientLoginSerializer,
        responses={200: ClientLoginResponseSerializer},
        description='Login for client companies to access talent pool.'
    )
    def post(self, request):
        serializer = ClientLoginSerializer(data=request.data)
        if not serializer.is_valid():
            return Response({
                'error': 'Invalid credentials'
            }, status=status.HTTP_400_BAD_REQUEST)

        email = serializer.validated_data['email']
        password = serializer.validated_data['password']

        try:
            client = ClientCompany.objects.get(email=email, is_active=True)
        except ClientCompany.DoesNotExist:
            return Response({
                'error': 'Invalid credentials'
            }, status=status.HTTP_401_UNAUTHORIZED)

        if not client.check_password(password):
            return Response({
                'error': 'Invalid credentials'
            }, status=status.HTTP_401_UNAUTHORIZED)

        # Generate new token and update last login
        token = client.generate_access_token()
        client.last_login = timezone.now()
        client.save()

        return Response({
            'token': token,
            'company_name': client.company_name,
            'message': 'Login successful'
        }, status=status.HTTP_200_OK)


@method_decorator(csrf_exempt, name='dispatch')
class ClientLogoutView(APIView):
    """
    API endpoint for client logout.
    Invalidates the current access token.
    """
    permission_classes = [AllowAny]
    authentication_classes = []

    def post(self, request):
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        if not token:
            return Response({
                'error': 'No token provided'
            }, status=status.HTTP_400_BAD_REQUEST)

        try:
            client = ClientCompany.objects.get(access_token=token, is_active=True)
            client.generate_access_token()  # Invalidate old token
            client.save()
            return Response({
                'message': 'Logged out successfully'
            }, status=status.HTTP_200_OK)
        except ClientCompany.DoesNotExist:
            return Response({
                'error': 'Invalid token'
            }, status=status.HTTP_401_UNAUTHORIZED)


class TalentPoolView(APIView):
    """
    API endpoint for viewing available talent.
    Requires valid client access token.
    Only shows candidates who have passed screening (status >= 'screening').
    Hides sensitive information like email, phone, and resume.
    """
    permission_classes = [AllowAny]

    @extend_schema(
        parameters=[
            OpenApiParameter(name='position', description='Filter by position', required=False, type=str),
            OpenApiParameter(name='work_mode', description='Filter by work mode', required=False, type=str),
            OpenApiParameter(name='min_experience', description='Minimum years of experience', required=False, type=int),
            OpenApiParameter(name='skill', description='Filter by skill (partial match)', required=False, type=str),
        ],
        responses={200: TalentPoolSerializer(many=True)},
        description='Get list of available talent for client companies.'
    )
    def get(self, request):
        # Verify token
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        if not token:
            return Response({
                'error': 'Authentication required'
            }, status=status.HTTP_401_UNAUTHORIZED)

        try:
            client = ClientCompany.objects.get(access_token=token, is_active=True)
        except ClientCompany.DoesNotExist:
            return Response({
                'error': 'Invalid or expired token'
            }, status=status.HTTP_401_UNAUTHORIZED)

        # Get candidates who have passed initial screening
        # Status choices that indicate vetted candidates
        approved_statuses = ['screening', 'technical', 'interview', 'offer', 'hired']
        queryset = DeveloperApplication.objects.filter(
            status__in=approved_statuses
        )

        # Apply filters
        position = request.query_params.get('position')
        if position:
            queryset = queryset.filter(position=position)

        work_mode = request.query_params.get('work_mode')
        if work_mode:
            queryset = queryset.filter(work_mode=work_mode)

        min_experience = request.query_params.get('min_experience')
        if min_experience:
            try:
                queryset = queryset.filter(years_of_experience__gte=int(min_experience))
            except ValueError:
                pass

        skill = request.query_params.get('skill')
        if skill:
            queryset = queryset.filter(
                primary_skills__icontains=skill
            ) | queryset.filter(
                programming_languages__icontains=skill
            ) | queryset.filter(
                frameworks__icontains=skill
            )

        # Order by experience (most experienced first)
        queryset = queryset.order_by('-years_of_experience', '-created_at')

        serializer = TalentPoolSerializer(queryset, many=True)
        return Response({
            'count': queryset.count(),
            'talent': serializer.data
        }, status=status.HTTP_200_OK)


class TalentFiltersView(APIView):
    """
    API endpoint for getting available filter options.
    """
    permission_classes = [AllowAny]

    def get(self, request):
        # Verify token
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        if not token:
            return Response({
                'error': 'Authentication required'
            }, status=status.HTTP_401_UNAUTHORIZED)

        try:
            ClientCompany.objects.get(access_token=token, is_active=True)
        except ClientCompany.DoesNotExist:
            return Response({
                'error': 'Invalid or expired token'
            }, status=status.HTTP_401_UNAUTHORIZED)

        return Response({
            'positions': [
                {'value': choice[0], 'label': choice[1]}
                for choice in DeveloperApplication.POSITION_CHOICES
            ],
            'work_modes': [
                {'value': choice[0], 'label': choice[1]}
                for choice in DeveloperApplication.WORK_MODE_CHOICES
            ],
            'experience_levels': [
                {'value': 0, 'label': 'Any'},
                {'value': 2, 'label': '2+ years'},
                {'value': 5, 'label': '5+ years'},
                {'value': 8, 'label': '8+ years'},
                {'value': 10, 'label': '10+ years'},
            ]
        }, status=status.HTTP_200_OK)
