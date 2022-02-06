from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import User
from .serializers import SignupSerializer, UserSerializer

# Create your views here.
# 회원가입
class SignupView:
    pass


# 회원정보
class UserView:
    pass
