import uuid
from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
)  # 커스텀 유저 모델을 만들기 위해 두가지 모델을 사용


# 유저를 생성할 떄 사용되는 클래스, AbstractBaseUser 클래스를 상속받아 생성한다.
class UserManager(BaseUserManager):
    # 일반유저 생성
    def create_user(self, email, nickname, password=None):
        if not email:
            raise ValueError("Must have email.")
        if not nickname:
            raise ValueError("Must have nickname.")

        user = self.model(
            email=self.normalize_email(email),
            nickname=nickname,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    # 관리자 생성
    def create_superuser(self, email, nickname, password):
        user = self.create_user(
            email,
            nickname=nickname,
            password=password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


# Create your models here.
class User(AbstractBaseUser):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False
    )  # uuid 형식으로 고유키 생성
    email = models.EmailField(max_length=100, unique=True, verbose_name="이메일")
    password = models.CharField(max_length=100, verbose_name="비밀번호")
    nickname = models.CharField(max_length=30, unique=True, verbose_name="닉네임")
    intro = models.CharField(max_length=100, blank=True, verbose_name="자기소개")
    image = models.ImageField(
        upload_to="accounts/%Y/%m/%d", blank=True, verbose_name="프로필 이미지"
    )
    created = models.DateTimeField(auto_now_add=True, verbose_name="가입일")
    updated = models.DateTimeField(auto_now=True, verbose_name="수정일")

    objects = UserManager()

    USERNAME_FIELD = "email"  # 식별자로 사용할 필드 설정, 로그인을 이메일로 설정

    REQUIRED_FIELDS = [
        "nickname",
    ]  # 필요한 필드를 정의, 회원가입시 필수 입력 필드

    is_active = models.BooleanField(default=True)  # 계정 활성화 유무
    is_staff = models.BooleanField(default=False)  # 관리자화면 접속 권한
    is_admin = models.BooleanField(default=False)  # 관리자 계정인지

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        """권한 소지여부를 판단하기 위한 메서드"""
        return True

    def has_module_perms(self, app_label):
        """앱 라벨을 받아, 해당 앱에 접근 가능한지 파악"""
        return True

    @property
    def is_staff(self):
        # True면  관리자화면에 접근 가능
        return self.is_admin
