from .common import *
from backend.secrets import AWS_SECRET_ACCESS_KEY

DEBUG = False

ALLOWED_HOSTS = [".ap-northeast-2.compute.amazonaws.com", ".crud.codes"]

# DB MySQL로 설정
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.mysql",
        "NAME": "crud",
        "USER": "admin",
        "PASSWORD": "qkfka0620",
        "HOST": "database-1.cpyk6hitqndq.ap-northeast-2.rds.amazonaws.com",
        "PORT": "3306",
    }
}

WSGI_APPLICATION = "backend.wsgi.application"

# 기본스토리지는 s3로 설정하기 위해
DEFAULT_FILE_STORAGE = "storages.backends.s3boto3.S3Boto3Storage"
STATICFILES_STORAGE = "storages.backends.s3boto3.S3Boto3Storage"


AWS_ACCESS_KEY_ID = "AKIAYJ45ZEDKHQ2U27KJ"
AWS_SECRET_ACCESS_KEY = AWS_SECRET_ACCESS_KEY
AWS_STORAGE_BUCKET_NAME = "mycrud-bucket"
