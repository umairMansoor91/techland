from rest_framework import serializers
from apps.applications.models import DeveloperApplication


class ClientLoginSerializer(serializers.Serializer):
    """Serializer for client login."""
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)


class ClientLoginResponseSerializer(serializers.Serializer):
    """Response serializer for successful login."""
    token = serializers.CharField()
    company_name = serializers.CharField()
    message = serializers.CharField()


class TalentPoolSerializer(serializers.ModelSerializer):
    """
    Serializer for talent pool - hides sensitive info like email, phone, resume.
    Shows only professional information for client companies.
    """
    position_display = serializers.CharField(source='get_position_display', read_only=True)
    work_mode_display = serializers.CharField(source='get_work_mode_display', read_only=True)
    english_proficiency_display = serializers.CharField(source='get_english_proficiency_display', read_only=True)
    skills = serializers.SerializerMethodField()
    languages = serializers.SerializerMethodField()
    tools = serializers.SerializerMethodField()
    # Use first name only for privacy
    display_name = serializers.SerializerMethodField()

    class Meta:
        model = DeveloperApplication
        fields = [
            'id',
            'display_name',
            'position',
            'position_display',
            'years_of_experience',
            'work_mode',
            'work_mode_display',
            'english_proficiency',
            'english_proficiency_display',
            'skills',
            'languages',
            'tools',
            'available_from',
            'willing_to_relocate',
            'portfolio_url',
            'github_url',
            'linkedin_url',
        ]

    def get_display_name(self, obj):
        """Return first name + last initial for privacy."""
        parts = obj.full_name.strip().split()
        if len(parts) >= 2:
            return f"{parts[0]} {parts[-1][0]}."
        return parts[0] if parts else "Developer"

    def get_skills(self, obj):
        """Parse primary skills into a list."""
        if obj.primary_skills:
            return [s.strip() for s in obj.primary_skills.split(',') if s.strip()]
        return []

    def get_languages(self, obj):
        """Parse programming languages into a list."""
        if obj.programming_languages:
            return [s.strip() for s in obj.programming_languages.split(',') if s.strip()]
        return []

    def get_tools(self, obj):
        """Parse frameworks/tools into a list."""
        if obj.frameworks:
            return [s.strip() for s in obj.frameworks.split(',') if s.strip()]
        return []
