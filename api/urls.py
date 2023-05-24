from django.contrib import admin
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from  api.views import *
router = routers.DefaultRouter()
router.register(r"user", UserViewSet)
router.register(r"address",AdderssViewSet)
router.register(r"car", CarViewSet)
router.register(r"chat", ChatViewSet)


urlpatterns = [
    path("", include(router.urls)),
    path("admin/", admin.site.urls),
]