from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class HealthCheckView(APIView):
    """Health check endpoint for monitoring."""

    def get(self, request):
        return Response({
            'status': 'healthy',
            'service': 'TechLand API'
        }, status=status.HTTP_200_OK)
