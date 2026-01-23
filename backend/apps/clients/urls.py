from django.urls import path
from .views import (
    ClientLoginView,
    ClientLogoutView,
    TalentPoolView,
    TalentFiltersView,
    TalentDetailView
)

urlpatterns = [
    path('login/', ClientLoginView.as_view(), name='client-login'),
    path('logout/', ClientLogoutView.as_view(), name='client-logout'),
    path('talent/', TalentPoolView.as_view(), name='talent-pool'),
    path('talent/filters/', TalentFiltersView.as_view(), name='talent-filters'),
    path('talent/<int:talent_id>/', TalentDetailView.as_view(), name='talent-detail'),
]
