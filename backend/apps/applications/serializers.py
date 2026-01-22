from rest_framework import serializers
from django.conf import settings
from apps.core.spam_protection import HoneypotMixin, RecaptchaMixin
from .models import DeveloperApplication


class DeveloperApplicationSerializer(HoneypotMixin, RecaptchaMixin, serializers.ModelSerializer):
    """Serializer for developer application submissions."""

    # Spam protection fields (not saved to model)
    honeypot = serializers.CharField(required=False, allow_blank=True, write_only=True)
    recaptcha_token = serializers.CharField(required=False, allow_blank=True, write_only=True)

    class Meta:
        model = DeveloperApplication
        fields = [
            # Personal info
            'full_name',
            'email',
            'phone',
            'years_of_experience',
            # Position
            'position',
            'work_mode',
            'available_from',
            'notice_period',
            # Skills
            'primary_skills',
            'programming_languages',
            'frameworks',
            # Links
            'portfolio_url',
            'github_url',
            'linkedin_url',
            # Resume
            'resume',
            # Additional
            'english_proficiency',
            'cover_letter',
            'willing_to_relocate',
            # Spam protection
            'honeypot',
            'recaptcha_token',
        ]
        extra_kwargs = {
            'notice_period': {'required': False},
            'portfolio_url': {'required': False},
            'github_url': {'required': False},
            'linkedin_url': {'required': False},
            'cover_letter': {'required': False},
            'resume': {'required': False},
        }

    def validate_resume(self, value):
        """Validate resume is a PDF and within size limit."""
        if value:
            # Check file extension
            if not value.name.lower().endswith('.pdf'):
                raise serializers.ValidationError('Only PDF files are allowed.')
            # Check file size (5MB max)
            max_size = getattr(settings, 'MAX_RESUME_SIZE', 5 * 1024 * 1024)
            if value.size > max_size:
                raise serializers.ValidationError(
                    f'Resume file size must be less than {max_size // (1024 * 1024)}MB.'
                )
        return value

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
                'Please use a valid personal or professional email address.'
            )

        return value

    def validate_years_of_experience(self, value):
        """Validate years of experience is reasonable."""
        if value > 50:
            raise serializers.ValidationError(
                'Please enter a valid number of years of experience.'
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


class DeveloperApplicationResponseSerializer(serializers.Serializer):
    """Serializer for application submission response."""
    message = serializers.CharField()
    application_id = serializers.IntegerField()


class OpenPositionSerializer(serializers.Serializer):
    """Serializer for listing open positions."""
    id = serializers.CharField()
    title = serializers.CharField()
    department = serializers.CharField()
    location = serializers.CharField()
    type = serializers.CharField()
    description = serializers.CharField()
