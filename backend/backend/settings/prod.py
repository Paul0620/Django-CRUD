from .common import *

# DB MySQL로 설정
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.mysql",
        "NAME": "database-1",
        "USER": "admin",
        "PASSWORD": "qkfka0620",
        "HOST": "database-1.cpyk6hitqndq.ap-northeast-2.rds.amazonaws.com",
        "PORT": "3306",
    }
}
