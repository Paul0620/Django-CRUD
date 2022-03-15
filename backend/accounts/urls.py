from django.urls import path, include, re_path
from . import views


# user_list = views.UserViewSet.as_view(
#     {
#         "get": "list",
#         "post": "create",
#     }
# )

# user_detail = views.UserViewSet.as_view(
#     {
#         "get": "retrieve",
#         "put": "update",
#         "patch": "partial_update",
#         "delete": "destroy",
#     }
# )

urlpatterns = [
    path("signup/", views.SignupView.as_view(), name="회원가입"),
    path("<uuid:pk>/", views.UserView.as_view(), name="회원정보"),
    # path("<uuid:pk>/", user_detail),
    # path("", views.SignupView.as_view()),
    # path("<uuid:pk>/", views.UserDetailView.as_view()),
    # path("<uuid:pk>/edit", views.UserUpdateView.as_view()),
    # path("<uuid:pk>/", views.UserDeleteView.as_view()),
    path("api-auth/", include("rest_framework.urls")),  # 로그인/로그아웃 기능 사용
]
