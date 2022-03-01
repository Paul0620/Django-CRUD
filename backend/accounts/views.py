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
    queryset = User.objects.all()
    serializer_class = SignupSerializer
    permission_classes = [AllowAny]


# 회원리스트
class UserListView(ListAPIView):
    pass


# 회원정보
class UserDetailView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
