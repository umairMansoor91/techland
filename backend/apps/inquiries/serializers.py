from rest_framework import serializers
from apps.core.spam_protection import HoneypotMixin, RecaptchaMixin
from .models import ClientInquiry


class ClientInquirySerializer(HoneypotMixin, RecaptchaMixin, serializers.ModelSerializer):
    """Serializer for client inquiry submissions."""

    # Spam protection fields (not saved to model)
    honeypot = serializers.CharField(required=False, allow_blank=True, write_only=True)
    recaptcha_token = serializers.CharField(required=False, allow_blank=True, write_only=True)

    class Meta:
        model = ClientInquiry
        fields = [
            # Client info
            'full_name',
            'company_name',
            'email',
            'phone',
            'country',
            'company_size',
            'industry',
            'website',
            # Project details
            'project_type',
            'budget_range',
            'timeline',
            'project_description',
            'additional_notes',
            # Marketing
            'referral_source',
            # Spam protection
            'honeypot',
            'recaptcha_token',
        ]
        extra_kwargs = {
            'website': {'required': False},
            'additional_notes': {'required': False},
            'referral_source': {'required': False},
        }

    def validate_email(self, value):
        """Validate email format and check for disposable emails."""
        value = value.lower().strip()

        # Block common disposable email domains
        disposable_domains = [
            'tempmail.com', 'throwaway.com', 'guerrillamail.com',
            'mailinator.com', '10minutemail.com', 'fakeinbox.com',
            'temp-mail.org', 'disposablemail.com'
        ]

        domain = value.split('@')[-1]
        if domain in disposable_domains:
            raise serializers.ValidationError(
                'Please use a valid business email address.'
            )

        return value

    def validate_project_description(self, value):
        """Ensure project description has meaningful content."""
        if len(value.strip()) < 50:
            raise serializers.ValidationError(
                'Please provide more detail about your project (at least 50 characters).'
            )
        return value

    def create(self, validated_data):
        # Remove spam protection fields before saving
        validated_data.pop('honeypot', None)
        validated_data.pop('recaptcha_token', None)

        # Add request metadata
        request = self.context.get('request')
        if request:
            validated_data['ip_address'] = self._get_client_ip(request)
            validated_data['user_agent'] = request.META.get('HTTP_USER_AGENT', '')[:500]

        return super().create(validated_data)

    def _get_client_ip(self, request):
        """Extract client IP from request."""
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            return x_forwarded_for.split(',')[0].strip()
        return request.META.get('REMOTE_ADDR')


class ClientInquiryResponseSerializer(serializers.Serializer):
    """Serializer for inquiry submission response."""
    message = serializers.CharField()
    inquiry_id = serializers.IntegerField()
