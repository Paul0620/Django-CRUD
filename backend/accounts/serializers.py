from rest_framework import serializers
from django.contrib.auth import get_user_model


User = get_user_model()

# 회원가입
class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "password", "nickname"]

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data["email"], nickname=validated_data["nickname"]
        )
        # .set_password(raw_password) : 지정 암호를 암호화해서 password 필드에 저장 (save함수 호출 안함)
        user.set_password(validated_data["password"])
        user.save()
        return user


# 회원정보
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "nickname", "image", "intro"]
