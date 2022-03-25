from django.db import models
from django.conf import settings
from accounts.models import User

# Create your models here.
class Post(models.Model):
    id = models.AutoField(primary_key=True, null=False, blank=False)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, verbose_name="게시물 작성자"
    )
    title = models.CharField(max_length=100, verbose_name="게시물 제목")
    content = models.TextField(verbose_name="게시물 내용")
    image = models.ImageField(
        upload_to="posts/%Y/%m/%d", blank=True, verbose_name="게시물 이미지"
    )
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="게시물 작성일")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="게시물 수정일")

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["-id"]


class Comment(models.Model):
    id = models.AutoField(primary_key=True, null=False, blank=False)
    post = models.ForeignKey(Post, null=False, blank=False, on_delete=models.CASCADE)
    user = models.ForeignKey(
        User, null=False, blank=False, on_delete=models.CASCADE, verbose_name="댓글 작성자"
    )
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="댓글 작성일")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="댓글 수정일")
    comment = models.TextField(verbose_name="댓글 내용")

    def __str__(self):
        return self.comment

    class Meta:
        ordering = ["-id"]
