from django.urls import path
from .views import ClientInquiryCreateView

urlpatterns = [
    path('', ClientInquiryCreateView.as_view(), name='create-inquiry'),
]
