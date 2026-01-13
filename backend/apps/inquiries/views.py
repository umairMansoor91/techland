from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle
from drf_spectacular.utils import extend_schema

from .serializers import ClientInquirySerializer, ClientInquiryResponseSerializer


class InquiryRateThrottle(AnonRateThrottle):
    """Custom throttle for inquiry submissions."""
    scope = 'inquiries'


class ClientInquiryCreateView(APIView):
    """
    API endpoint for submitting client consultancy inquiries.

    Includes:
    - Rate limiting (5 requests/hour per IP)
    - Honeypot spam protection
    - reCAPTCHA v3 verification
    - Data stored in database (viewable in Django admin)
    """
    throttle_classes = [InquiryRateThrottle]

    @extend_schema(
        request=ClientInquirySerializer,
        responses={201: ClientInquiryResponseSerializer},
        description='Submit a new client inquiry for consultancy services.'
    )
    def post(self, request):
        serializer = ClientInquirySerializer(
            data=request.data,
            context={'request': request}
        )

        if serializer.is_valid():
            inquiry = serializer.save()

            return Response({
                'message': 'Thank you for your inquiry. We will contact you within 24-48 hours.',
                'inquiry_id': inquiry.id
            }, status=status.HTTP_201_CREATED)

        return Response({
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
