import secrets
from django.db import models
from django.contrib.auth.hashers import make_password, check_password


class ClientCompany(models.Model):
    """Model for client companies that can access the talent pool."""

    company_name = models.CharField(max_length=200)
    contact_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)  # Hashed password

    # Access control
    is_active = models.BooleanField(default=True)
    access_token = models.CharField(max_length=64, unique=True, blank=True)
    token_created_at = models.DateTimeField(null=True, blank=True)

    # Metadata
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    last_login = models.DateTimeField(null=True, blank=True)

    class Meta:
        verbose_name = 'Client Company'
        verbose_name_plural = 'Client Companies'
        ordering = ['company_name']

    def __str__(self):
        return f"{self.company_name} ({self.contact_name})"

    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)

    def generate_access_token(self):
        from django.utils import timezone
        self.access_token = secrets.token_hex(32)
        self.token_created_at = timezone.now()
        return self.access_token

    def save(self, *args, **kwargs):
        if not self.access_token:
            self.access_token = secrets.token_hex(32)
        super().save(*args, **kwargs)
