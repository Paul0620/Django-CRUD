from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer
from .permissions import IsOwnerOrReadOnly
from rest_framework import viewsets, permissions, authentication

# Create your views here.
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    # 유저 인증에 대한 정보를 토큰으로 인증하기 위한 설정
    authentication_classes = [authentication.TokenAuthentication]
    # 권한설정, 접속유저에 따른 권한 설정
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

    # mixins에서 제공되는 기능
    # 새 object 인스턴스를 저장할 때 CreateModelMixin에 의해 호출된다.
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    # UpdateModelMixin
    def perform_update(self, serializer):
        serializer.save(user=self.request.user)

    # DestroyModelMixin
    def perform_destroy(self, instance):
        instance.delete()


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)

    def perform_destroy(self, instance):
        instance.delete()
