from django.contrib import admin
from django.utils.html import format_html
from .models import DeveloperApplication


@admin.register(DeveloperApplication)
class DeveloperApplicationAdmin(admin.ModelAdmin):
    list_display = [
        'full_name',
        'email',
        'position',
        'years_of_experience',
        'work_mode',
        'status',
        'technical_score',
        'created_at',
    ]
    list_filter = [
        'status',
        'position',
        'work_mode',
        'english_proficiency',
        'years_of_experience',
        'created_at',
    ]
    search_fields = [
        'full_name',
        'email',
        'primary_skills',
        'programming_languages',
    ]
    readonly_fields = [
        'ip_address',
        'user_agent',
        'created_at',
        'updated_at',
        'resume_link',
    ]
    ordering = ['-created_at']

    fieldsets = (
        ('Personal Information', {
            'fields': (
                'full_name',
                'email',
                'phone',
                'years_of_experience',
            )
        }),
        ('Position Details', {
            'fields': (
                'position',
                'work_mode',
                'available_from',
                'notice_period',
            )
        }),
        ('Technical Skills', {
            'fields': (
                'primary_skills',
                'programming_languages',
                'frameworks',
            )
        }),
        ('Links & Documents', {
            'fields': (
                'portfolio_url',
                'github_url',
                'linkedin_url',
                'resume',
                'resume_link',
            )
        }),
        ('Additional Information', {
            'fields': (
                'english_proficiency',
                'cover_letter',
                'willing_to_relocate',
            )
        }),
        ('Evaluation', {
            'fields': (
                'status',
                'assigned_to',
                'screening_notes',
                'technical_score',
                'interview_notes',
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

    def resume_link(self, obj):
        """Display resume as a clickable link."""
        if obj.resume:
            return format_html(
                '<a href="{}" target="_blank">Download Resume</a>',
                obj.resume.url
            )
        return 'No resume uploaded'
    resume_link.short_description = 'Resume'

    def has_delete_permission(self, request, obj=None):
        # Prevent accidental deletion, only superusers can delete
        return request.user.is_superuser

    actions = ['mark_as_reviewing', 'mark_as_rejected']

    @admin.action(description='Mark selected applications as Under Review')
    def mark_as_reviewing(self, request, queryset):
        queryset.update(status='reviewing')

    @admin.action(description='Mark selected applications as Rejected')
    def mark_as_rejected(self, request, queryset):
        queryset.update(status='rejected')
