from django.contrib import admin
from django import forms
from .models import ClientCompany


class ClientCompanyAdminForm(forms.ModelForm):
    """Custom form to handle password setting in admin."""
    new_password = forms.CharField(
        widget=forms.PasswordInput,
        required=False,
        help_text='Enter password (required for new accounts)'
    )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Make password required for new records
        if not self.instance.pk:
            self.fields['new_password'].required = True
            self.fields['new_password'].help_text = 'Password is required'

    class Meta:
        model = ClientCompany
        fields = '__all__'
        exclude = ['password']


@admin.register(ClientCompany)
class ClientCompanyAdmin(admin.ModelAdmin):
    form = ClientCompanyAdminForm
    list_display = [
        'company_name',
        'contact_name',
        'email',
        'is_active',
        'last_login',
        'created_at',
    ]
    list_filter = ['is_active', 'created_at']
    search_fields = ['company_name', 'contact_name', 'email']
    readonly_fields = ['access_token', 'token_created_at', 'created_at', 'updated_at', 'last_login']

    fieldsets = (
        ('Company Information', {
            'fields': ('company_name', 'contact_name', 'email')
        }),
        ('Authentication', {
            'fields': ('new_password', 'is_active')
        }),
        ('Access Token', {
            'fields': ('access_token', 'token_created_at'),
            'classes': ('collapse',)
        }),
        ('Metadata', {
            'fields': ('last_login', 'created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

    def save_model(self, request, obj, form, change):
        new_password = form.cleaned_data.get('new_password')
        if new_password:
            obj.set_password(new_password)
        super().save_model(request, obj, form, change)
