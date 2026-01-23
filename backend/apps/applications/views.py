from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from drf_spectacular.utils import extend_schema

from .serializers import (
    DeveloperApplicationSerializer,
    DeveloperApplicationResponseSerializer,
    OpenPositionSerializer
)


class ApplicationRateThrottle(AnonRateThrottle):
    """Custom throttle for application submissions."""
    scope = 'applications'


class DeveloperApplicationCreateView(APIView):
    """
    API endpoint for submitting developer job applications.

    Includes:
    - Rate limiting (3 requests/hour per IP)
    - Honeypot spam protection
    - reCAPTCHA v3 verification
    - Data stored in database (viewable in Django admin)
    - File upload support for resumes (PDF only, max 5MB)
    """
    throttle_classes = [ApplicationRateThrottle]
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    @extend_schema(
        request=DeveloperApplicationSerializer,
        responses={201: DeveloperApplicationResponseSerializer},
        description='Submit a developer job application with resume.'
    )
    def post(self, request):
        serializer = DeveloperApplicationSerializer(
            data=request.data,
            context={'request': request}
        )

        if serializer.is_valid():
            application = serializer.save()

            return Response({
                'message': 'Thank you for your application. We will review it and get back to you within 5-7 business days.',
                'application_id': application.id
            }, status=status.HTTP_201_CREATED)

        return Response({
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)


class OpenPositionsListView(APIView):
    """
    API endpoint for listing open positions.
    """

    @extend_schema(
        responses={200: OpenPositionSerializer(many=True)},
        description='Get list of all open positions.'
    )
    def get(self, request):
        # These match the positions from the frontend Careers page
        positions = [
            {
                'id': 'senior_frontend',
                'title': 'Senior Frontend Developer',
                'department': 'Engineering',
                'location': 'Remote',
                'type': 'Full-time',
                'description': 'Build beautiful, responsive user interfaces using React and modern frontend technologies.'
            },
            {
                'id': 'backend_python',
                'title': 'Backend Developer (Python)',
                'department': 'Engineering',
                'location': 'Remote',
                'type': 'Full-time',
                'description': 'Develop scalable backend services using Python, Django, and FastAPI.'
            },
            {
                'id': 'fullstack',
                'title': 'Full Stack Developer',
                'department': 'Engineering',
                'location': 'Hybrid',
                'type': 'Full-time',
                'description': 'Work across the entire stack, from database to user interface.'
            },
            {
                'id': 'react_native',
                'title': 'React Native Developer',
                'department': 'Mobile',
                'location': 'Remote',
                'type': 'Full-time',
                'description': 'Build cross-platform mobile applications using React Native.'
            },
            {
                'id': 'devops',
                'title': 'DevOps Engineer',
                'department': 'Infrastructure',
                'location': 'Remote',
                'type': 'Full-time',
                'description': 'Manage cloud infrastructure, CI/CD pipelines, and deployment automation.'
            },
            {
                'id': 'ml_engineer',
                'title': 'AI/ML Engineer',
                'department': 'AI/ML',
                'location': 'Remote',
                'type': 'Full-time',
                'description': 'Design and implement machine learning models and AI solutions.'
            },
            {
                'id': 'qa_engineer',
                'title': 'QA Engineer',
                'department': 'Quality',
                'location': 'Remote',
                'type': 'Full-time',
                'description': 'Ensure software quality through automated and manual testing.'
            },
            {
                'id': 'ui_ux',
                'title': 'UI/UX Designer',
                'department': 'Design',
                'location': 'Remote',
                'type': 'Full-time',
                'description': 'Create intuitive and beautiful user experiences for web and mobile applications.'
            },
            {
                'id': 'project_manager',
                'title': 'Technical Project Manager',
                'department': 'Management',
                'location': 'Hybrid',
                'type': 'Full-time',
                'description': 'Lead technical projects and coordinate between teams and clients.'
            },
            {
                'id': 'data_engineer',
                'title': 'Data Engineer',
                'department': 'Data',
                'location': 'Remote',
                'type': 'Full-time',
                'description': 'Build and maintain data pipelines and analytics infrastructure.'
            },
            {
                'id': 'security_engineer',
                'title': 'Security Engineer',
                'department': 'Security',
                'location': 'Remote',
                'type': 'Full-time',
                'description': 'Implement security best practices and conduct security assessments.'
            },
            {
                'id': 'cloud_architect',
                'title': 'Cloud Solutions Architect',
                'department': 'Architecture',
                'location': 'Hybrid',
                'type': 'Full-time',
                'description': 'Design and implement cloud-native solutions on AWS, Azure, or GCP.'
            },
        ]

        serializer = OpenPositionSerializer(positions, many=True)
        return Response(serializer.data)
