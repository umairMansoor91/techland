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


class TalentDetailView(APIView):
    """
    API endpoint for viewing detailed talent profile.
    Requires valid client access token.
    """
    permission_classes = [AllowAny]

    def get(self, request, talent_id):
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

        # Get the talent profile
        approved_statuses = ['screening', 'technical', 'interview', 'offer', 'hired']
        try:
            talent = DeveloperApplication.objects.get(
                id=talent_id,
                status__in=approved_statuses
            )
        except DeveloperApplication.DoesNotExist:
            return Response({
                'error': 'Talent not found'
            }, status=status.HTTP_404_NOT_FOUND)

        # Build detailed response (still hiding sensitive info)
        skills = [s.strip() for s in talent.primary_skills.split(',') if s.strip()]
        languages = [s.strip() for s in talent.programming_languages.split(',') if s.strip()]
        tools = [s.strip() for s in talent.frameworks.split(',') if s.strip()]

        # Get first name + last initial
        parts = talent.full_name.strip().split()
        if len(parts) >= 2:
            display_name = f"{parts[0]} {parts[-1][0]}."
        else:
            display_name = parts[0] if parts else "Developer"

        return Response({
            'id': talent.id,
            'display_name': display_name,
            'position': talent.position,
            'position_display': talent.get_position_display(),
            'years_of_experience': talent.years_of_experience,
            'work_mode': talent.work_mode,
            'work_mode_display': talent.get_work_mode_display(),
            'english_proficiency': talent.english_proficiency,
            'english_proficiency_display': talent.get_english_proficiency_display(),
            'available_from': talent.available_from,
            'notice_period': talent.notice_period,
            'willing_to_relocate': talent.willing_to_relocate,
            'skills': skills,
            'languages': languages,
            'tools': tools,
            'portfolio_url': talent.portfolio_url,
            'github_url': talent.github_url,
            'linkedin_url': talent.linkedin_url,
            'cover_letter': talent.cover_letter,
            # Metrics for display
            'metrics': {
                'total_skills': len(skills) + len(languages) + len(tools),
                'skill_categories': len(set([s.lower() for s in skills])),
                'experience_level': 'Senior' if talent.years_of_experience >= 7 else 'Mid-Level' if talent.years_of_experience >= 4 else 'Junior',
                'availability_status': 'Available Now' if talent.available_from <= timezone.now().date() else f'Available {talent.available_from.strftime("%b %d, %Y")}',
            }
        }, status=status.HTTP_200_OK)
