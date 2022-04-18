from .common import *
from backend.secrets import *

DEBUG = False

ALLOWED_HOSTS = [".ap-northeast-2.compute.amazonaws.com"]

# DB MySQL로 설정
DATABASES = DATABASES

WSGI_APPLICATION = "backend.wsgi.application"

# 기본스토리지는 s3로 설정하기 위해
DEFAULT_FILE_STORAGE = "config.storages.MediaStorage"
STATICFILES_STORAGE = "config.storages.StaticStorage"
MEDIAFILES_LOCATION = "media"
STATICFILES_LOCATION = "static"


AWS_ACCESS_KEY_ID = AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY = AWS_SECRET_ACCESS_KEY
AWS_STORAGE_BUCKET_NAME = AWS_STORAGE_BUCKET_NAME

AWS_QUERYSTRING_AUTH = False  # 요청에 대한 복잡한 인증 관련 쿼리 매개 변수 허용 여부

CORS_ORIGIN_WHITELIST = os.environ.get("CORS_ORIGIN_WHITELIST", "").split(",")
