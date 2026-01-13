"""
Spam protection utilities for form submissions.
Includes honeypot validation and reCAPTCHA verification.
"""
import requests
from django.conf import settings
from rest_framework import serializers


class HoneypotMixin:
    """
    Mixin for honeypot spam protection.
    Adds a hidden field that bots will fill but humans won't see.
    """

    def validate_honeypot(self, value):
        """
        Honeypot field should always be empty.
        If it has a value, it's likely a bot.
        """
        if value:
            raise serializers.ValidationError(
                'Invalid submission detected.',
                code='spam_detected'
            )
        return value


def verify_recaptcha(token: str) -> dict:
    """
    Verify reCAPTCHA v3 token with Google.

    Args:
        token: The reCAPTCHA token from frontend

    Returns:
        dict with 'success' boolean and 'score' (0.0 - 1.0)
    """
    if not settings.RECAPTCHA_PRIVATE_KEY:
        # Skip verification in development if not configured
        return {'success': True, 'score': 1.0}

    try:
        response = requests.post(
            'https://www.google.com/recaptcha/api/siteverify',
            data={
                'secret': settings.RECAPTCHA_PRIVATE_KEY,
                'response': token,
            },
            timeout=10
        )
        result = response.json()

        return {
            'success': result.get('success', False),
            'score': result.get('score', 0.0),
            'action': result.get('action', ''),
            'error_codes': result.get('error-codes', [])
        }
    except requests.RequestException:
        # Fail open in case of network issues, but log it
        return {'success': True, 'score': 0.5, 'error': 'verification_failed'}


class RecaptchaMixin:
    """
    Mixin for reCAPTCHA v3 validation in serializers.
    """

    def validate_recaptcha_token(self, value):
        """Validate reCAPTCHA token."""
        if not value and settings.RECAPTCHA_PRIVATE_KEY:
            raise serializers.ValidationError(
                'reCAPTCHA verification required.',
                code='recaptcha_required'
            )

        if value:
            result = verify_recaptcha(value)

            if not result.get('success'):
                raise serializers.ValidationError(
                    'reCAPTCHA verification failed.',
                    code='recaptcha_failed'
                )

            if result.get('score', 0) < settings.RECAPTCHA_REQUIRED_SCORE:
                raise serializers.ValidationError(
                    'Verification score too low. Please try again.',
                    code='recaptcha_score_low'
                )

        return value
