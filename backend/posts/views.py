from .models import Post
from .serializers import PostSerializer
from rest_framework import viewsets

# Create your views here.
class PostViewSet(viewsets.ModelViewSet):
    pass
