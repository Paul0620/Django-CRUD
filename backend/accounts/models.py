from django.db import models

# Create your models here.
class User(models.Model):
    user_id = models.CharField(max_length=30, unique=True, verbose_name="아이디")
    user_pw = models.CharField(max_length=40, verbose_name="비밀번호")
    user_nickname = models.CharField(max_length=30, verbose_name="닉네임")
    user_intro = models.CharField(max_length=100, verbose_name="자기소개")
    user_image = models.ImageField()
