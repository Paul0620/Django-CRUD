from .common import *

DEBUG = False

ALLOWED_HOSTS = [".ap-northeast-2.compute.amazonaws.com"]

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
