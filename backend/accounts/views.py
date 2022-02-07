from django.http import request
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import User
from .serializers import SignupSerializer, UserSerializer

# Create your views here.
# 회원가입
@api_view(["POST"])
def SignupView():
    pass


# 회원정보
@api_view(["GET"])
def UserView(request, id):
    user = User.objects.get(id=id)
    serializer = UserSerializer(user)
    return Response(serializer.data)
