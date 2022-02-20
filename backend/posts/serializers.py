from .models import Post
from rest_framework import serializers


class PostSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source="user.nickname")

    class Meta:
        model = Post
        fields = ["id", "user", "title", "content", "image", "created_at", "updated_at"]
