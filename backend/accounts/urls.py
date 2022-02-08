from django.urls import path, include
from . import views
from rest_framework import urls

urlpatterns = [
    path("users", views.SignupView.as_view()),
    path("api-auth/", include("rest_framework.urls")),
]
