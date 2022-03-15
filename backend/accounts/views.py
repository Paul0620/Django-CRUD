from rest_framework.permissions import AllowAny
from rest_framework import viewsets, permissions
from rest_framework.generics import (
    CreateAPIView,
    RetrieveAPIView,
    UpdateAPIView,
    DestroyAPIView,
    get_object_or_404,
)
from rest_framework.response import Response
from .models import User
from .serializers import SignupSerializer, UserSerializer


# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

# Create your views here.
# 회원가입
class SignupView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = SignupSerializer
    permission_classes = [AllowAny]


# 회원정도
class UserView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)


# # 회원수정
# class UserUpdateView(UpdateAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer


# # 회원삭제
# class UserDeleteView(DestroyAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
