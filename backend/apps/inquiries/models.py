from django.db import models


class ClientInquiry(models.Model):
    """Model for client consultancy inquiries."""

    # Company Size Choices
    COMPANY_SIZE_CHOICES = [
        ('1-10', '1-10 employees'),
        ('11-50', '11-50 employees'),
        ('51-200', '51-200 employees'),
        ('201-500', '201-500 employees'),
        ('500+', '500+ employees'),
    ]

    # Industry Choices (matching frontend)
    INDUSTRY_CHOICES = [
        ('healthcare', 'Healthcare'),
        ('finance', 'Finance & Banking'),
        ('ecommerce', 'E-Commerce & Retail'),
        ('education', 'Education'),
        ('real_estate', 'Real Estate'),
        ('logistics', 'Logistics & Supply Chain'),
        ('manufacturing', 'Manufacturing'),
        ('technology', 'Technology'),
        ('media', 'Media & Entertainment'),
        ('government', 'Government'),
        ('nonprofit', 'Non-Profit'),
        ('other', 'Other'),
    ]

    # Project Type Choices
    PROJECT_TYPE_CHOICES = [
        ('mvp', 'MVP Development'),
        ('web_app', 'Web Application'),
        ('mobile_app', 'Mobile Application'),
        ('ai_ml', 'AI/ML Solution'),
        ('digital_transformation', 'Digital Transformation'),
        ('cloud_migration', 'Cloud Migration'),
        ('consulting', 'Technical Consulting'),
        ('maintenance', 'Maintenance & Support'),
        ('other', 'Other'),
    ]

    # Budget Range Choices
    BUDGET_RANGE_CHOICES = [
        ('under_10k', 'Under $10,000'),
        ('10k_25k', '$10,000 - $25,000'),
        ('25k_50k', '$25,000 - $50,000'),
        ('50k_100k', '$50,000 - $100,000'),
        ('100k_250k', '$100,000 - $250,000'),
        ('250k_plus', '$250,000+'),
        ('undecided', 'Not decided yet'),
    ]

    # Timeline Choices
    TIMELINE_CHOICES = [
        ('asap', 'ASAP'),
        ('1_month', 'Within 1 month'),
        ('1_3_months', '1-3 months'),
        ('3_6_months', '3-6 months'),
        ('6_plus_months', '6+ months'),
        ('flexible', 'Flexible'),
    ]

    # Referral Source Choices
    REFERRAL_SOURCE_CHOICES = [
        ('google', 'Google Search'),
        ('linkedin', 'LinkedIn'),
        ('referral', 'Referral'),
        ('social_media', 'Social Media'),
        ('clutch', 'Clutch'),
        ('event', 'Event/Conference'),
        ('other', 'Other'),
    ]

    # Status Choices
    STATUS_CHOICES = [
        ('new', 'New'),
        ('in_review', 'In Review'),
        ('contacted', 'Contacted'),
        ('qualified', 'Qualified'),
        ('proposal_sent', 'Proposal Sent'),
        ('negotiating', 'Negotiating'),
        ('won', 'Won'),
        ('lost', 'Lost'),
    ]

    # Client Information
    full_name = models.CharField(max_length=100)
    company_name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=30)
    country = models.CharField(max_length=100)
    company_size = models.CharField(max_length=20, choices=COMPANY_SIZE_CHOICES)
    industry = models.CharField(max_length=50, choices=INDUSTRY_CHOICES)
    website = models.URLField(blank=True, null=True)

    # Project Details
    project_type = models.CharField(max_length=50, choices=PROJECT_TYPE_CHOICES)
    budget_range = models.CharField(max_length=20, choices=BUDGET_RANGE_CHOICES)
    timeline = models.CharField(max_length=20, choices=TIMELINE_CHOICES)
    project_description = models.TextField()
    additional_notes = models.TextField(blank=True, null=True)

    # Marketing
    referral_source = models.CharField(
        max_length=50,
        choices=REFERRAL_SOURCE_CHOICES,
        blank=True,
        null=True
    )

    # Admin/Internal Fields
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    assigned_to = models.CharField(max_length=100, blank=True, null=True)
    internal_notes = models.TextField(blank=True, null=True)

    # Metadata
    ip_address = models.GenericIPAddressField(blank=True, null=True)
    user_agent = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Client Inquiry'
        verbose_name_plural = 'Client Inquiries'
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.company_name} - {self.full_name} ({self.created_at.strftime('%Y-%m-%d')})"
