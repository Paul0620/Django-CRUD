from .common import *
from backend.secrets import *

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
DEFAULT_FILE_STORAGE = "config.storages.MediaStorage"
STATICFILES_STORAGE = "config.storages.StaticStorage"
MEDIAFILES_LOCATION = "media"
STATICFILES_LOCATION = "static"


AWS_ACCESS_KEY_ID = AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY = AWS_SECRET_ACCESS_KEY
AWS_STORAGE_BUCKET_NAME = AWS_STORAGE_BUCKET_NAME

STATIC_DIR = os.path.join(BASE_DIR, "static")
STATICFILES_DIRS = [
    STATIC_DIR,
]
