from django.urls import path
from .views import DeveloperApplicationCreateView, OpenPositionsListView

urlpatterns = [
    path('', DeveloperApplicationCreateView.as_view(), name='create-application'),
    path('positions/', OpenPositionsListView.as_view(), name='list-positions'),
]
