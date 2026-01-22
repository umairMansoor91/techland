import os
from django.db import models
from django.core.validators import FileExtensionValidator


def resume_upload_path(instance, filename):
    """Generate upload path for resumes: resumes/YYYY/MM/email_filename"""
    from django.utils import timezone
    now = timezone.now()
    # Sanitize email for folder name
    email_folder = instance.email.replace('@', '_at_').replace('.', '_')
    return f'resumes/{now.year}/{now.month:02d}/{email_folder}/{filename}'


class DeveloperApplication(models.Model):
    """Model for developer job applications."""

    # Position Choices (matching the 12 open positions from frontend)
    POSITION_CHOICES = [
        ('senior_frontend', 'Senior Frontend Developer'),
        ('backend_python', 'Backend Developer (Python)'),
        ('fullstack', 'Full Stack Developer'),
        ('react_native', 'React Native Developer'),
        ('devops', 'DevOps Engineer'),
        ('ml_engineer', 'Machine Learning Engineer'),
        ('qa_engineer', 'QA Engineer'),
        ('ui_ux', 'UI/UX Designer'),
        ('project_manager', 'Technical Project Manager'),
        ('data_engineer', 'Data Engineer'),
        ('security_engineer', 'Security Engineer'),
        ('cloud_architect', 'Cloud Solutions Architect'),
    ]

    # Work Mode Choices
    WORK_MODE_CHOICES = [
        ('remote', 'Full Remote'),
        ('hybrid', 'Hybrid'),
        ('onsite', 'On-site'),
    ]

    # English Proficiency Choices
    ENGLISH_PROFICIENCY_CHOICES = [
        ('basic', 'Basic'),
        ('intermediate', 'Intermediate'),
        ('advanced', 'Advanced'),
        ('fluent', 'Fluent/Native'),
    ]

    # Application Status Choices
    STATUS_CHOICES = [
        ('submitted', 'Submitted'),
        ('reviewing', 'Under Review'),
        ('screening', 'Phone Screening'),
        ('technical', 'Technical Assessment'),
        ('interview', 'Interview Stage'),
        ('offer', 'Offer Extended'),
        ('hired', 'Hired'),
        ('rejected', 'Rejected'),
        ('withdrawn', 'Withdrawn'),
    ]

    # Personal Information
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=30)
    years_of_experience = models.PositiveIntegerField()

    # Position Details
    position = models.CharField(max_length=50, choices=POSITION_CHOICES)
    work_mode = models.CharField(max_length=20, choices=WORK_MODE_CHOICES)
    available_from = models.DateField()
    notice_period = models.CharField(max_length=50, blank=True, null=True)

    # Technical Skills
    primary_skills = models.TextField(help_text='Comma-separated list of primary skills')
    programming_languages = models.TextField(help_text='Comma-separated list of programming languages')
    frameworks = models.TextField(help_text='Comma-separated list of frameworks/tools')

    # Links
    portfolio_url = models.URLField(blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    linkedin_url = models.URLField(blank=True, null=True)

    # Resume (PDF only)
    resume = models.FileField(
        upload_to=resume_upload_path,
        validators=[FileExtensionValidator(allowed_extensions=['pdf'])],
        help_text='PDF resume (max 5MB)',
        blank=True,
        null=True
    )

    # Additional Information
    english_proficiency = models.CharField(
        max_length=20,
        choices=ENGLISH_PROFICIENCY_CHOICES,
        default='intermediate'
    )
    cover_letter = models.TextField(blank=True, null=True)
    willing_to_relocate = models.BooleanField(default=False)

    # Admin/Internal Fields
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='submitted')
    screening_notes = models.TextField(blank=True, null=True)
    technical_score = models.PositiveIntegerField(blank=True, null=True)
    interview_notes = models.TextField(blank=True, null=True)
    assigned_to = models.CharField(max_length=100, blank=True, null=True)

    # Metadata
    ip_address = models.GenericIPAddressField(blank=True, null=True)
    user_agent = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Developer Application'
        verbose_name_plural = 'Developer Applications'
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.full_name} - {self.get_position_display()} ({self.created_at.strftime('%Y-%m-%d')})"
