from msilib.schema import ServiceInstall
from django.http import request
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import AllowAny
from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    RetrieveAPIView,
    get_object_or_404,
)
from .models import User
from .serializers import SignupSerializer, UserSerializer

# Create your views here.
# 회원가입
class SignupView(CreateAPIView):
    model = get_user_model()
    serializer = SignupSerializer
    permission = [AllowAny]


# 회원정보
class UserView(RetrieveAPIView):
    queryset = get_user_model().objects.all()
    serializer = UserSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
