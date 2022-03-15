from .models import Post, Comment
from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "nickname", "avatar"]


class PostSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Post
        fields = ["id", "user", "title", "content", "image", "created_at", "updated_at"]


class CommentSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source="user.nickname")

    class Meta:
        model = Comment
        fields = ["id", "post", "user", "created_at", "updated_at", "comment"]
