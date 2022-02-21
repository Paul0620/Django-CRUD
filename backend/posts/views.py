from .models import Post
from .serializers import PostSerializer
from rest_framework import viewsets, permissions

# Create your views here.
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    # 권한설정
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    # mixins에서 제공되는 기능
    # 새 object 인스턴스를 저장할 때 CreateModelMixin에 의해 호출된다.
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
