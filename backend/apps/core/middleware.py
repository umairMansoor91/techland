import time
from django.core.cache import cache
from django.http import JsonResponse


class RateLimitMiddleware:
    """
    Custom rate limiting middleware for additional spam protection.
    Works alongside DRF throttling for defense in depth.
    """

    def __init__(self, get_response):
        self.get_response = get_response
        # IP-based limits per minute
        self.rate_limits = {
            '/api/inquiries/': 10,
            '/api/applications/': 10,
        }

    def __call__(self, request):
        # Only apply to POST requests on protected endpoints
        if request.method == 'POST':
            for path, limit in self.rate_limits.items():
                if request.path.startswith(path):
                    if not self._check_rate_limit(request, path, limit):
                        return JsonResponse({
                            'error': 'Too many requests. Please try again later.',
                            'code': 'rate_limit_exceeded'
                        }, status=429)

        response = self.get_response(request)
        return response

    def _get_client_ip(self, request):
        """Extract client IP from request, handling proxies."""
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0].strip()
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip

    def _check_rate_limit(self, request, path, limit):
        """Check if request is within rate limit."""
        ip = self._get_client_ip(request)
        cache_key = f'rate_limit:{path}:{ip}'

        # Get current count
        current = cache.get(cache_key, 0)

        if current >= limit:
            return False

        # Increment counter with 60-second expiry
        cache.set(cache_key, current + 1, 60)
        return True
