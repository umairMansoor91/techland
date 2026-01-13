from django.contrib import admin
from .models import ClientInquiry


@admin.register(ClientInquiry)
class ClientInquiryAdmin(admin.ModelAdmin):
    list_display = [
        'company_name',
        'full_name',
        'email',
        'project_type',
        'budget_range',
        'status',
        'created_at',
    ]
    list_filter = [
        'status',
        'project_type',
        'budget_range',
        'industry',
        'company_size',
        'created_at',
    ]
    search_fields = [
        'company_name',
        'full_name',
        'email',
        'project_description',
    ]
    readonly_fields = [
        'ip_address',
        'user_agent',
        'created_at',
        'updated_at',
    ]
    ordering = ['-created_at']

    fieldsets = (
        ('Client Information', {
            'fields': (
                'full_name',
                'company_name',
                'email',
                'phone',
                'country',
                'company_size',
                'industry',
                'website',
            )
        }),
        ('Project Details', {
            'fields': (
                'project_type',
                'budget_range',
                'timeline',
                'project_description',
                'additional_notes',
            )
        }),
        ('Marketing', {
            'fields': ('referral_source',)
        }),
        ('Status & Assignment', {
            'fields': (
                'status',
                'assigned_to',
                'internal_notes',
            )
        }),
        ('Metadata', {
            'fields': (
                'ip_address',
                'user_agent',
                'created_at',
                'updated_at',
            ),
            'classes': ('collapse',)
        }),
    )

    def has_delete_permission(self, request, obj=None):
        # Prevent accidental deletion, only superusers can delete
        return request.user.is_superuser
