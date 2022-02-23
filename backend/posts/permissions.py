from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        # 읽기 권한
        if request.method in permissions.SAFE_METHODS:
            return True

        # 로그인 유저와 작성자가 동일한 유저인지
        return obj.user == request.user
