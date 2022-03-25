from rest_framework import serializers
from django.contrib.auth import get_user_model


User = get_user_model()

# 회원가입
class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "password", "nickname"]

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data["email"],
            nickname=validated_data["nickname"],
            password=validated_data["password"],
        )
        return user


# 회원정보
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "nickname", "avatar", "intro"]
