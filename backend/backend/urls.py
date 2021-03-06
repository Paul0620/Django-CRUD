"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import (
    obtain_jwt_token,
    refresh_jwt_token,
    verify_jwt_token,
)


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("posts.urls")),
    path("api/users/", include("accounts.urls")),
    path("api/token/", obtain_jwt_token, name="token-obtain"),  # jwt 토큰 발행
    path("api/token/verify/", verify_jwt_token, name="token-verify"),  # jwt 토큰 유효성 검증
    path("api/token/refresh/", refresh_jwt_token, name="token-refresh"),  # jwt 토큰 갱신
]


# 개발상태일때만 사용 가능, 프로덕션으로 내놓을 경우에는 DEBUG가 false라 사용하지 못함
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

    import debug_toolbar

    urlpatterns += [
        path("__debug__/", include(debug_toolbar.urls)),
    ]
