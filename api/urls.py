from django.contrib import admin
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from  api.views import *
from knox import views as knox_views
router = routers.DefaultRouter()
# router.register(r"user", UserViewSet)
router.register(r"address",AdderssViewSet)
router.register(r"car", CarViewSet)
router.register(r"chat", ChatViewSet)


urlpatterns = [
    path("", include(router.urls)),
    path("admin/", admin.site.urls),
    path("users",users),
    path("user/<pk>",user),
    path("userPost",userPost),
    path("userUpdate/<pk>",userUpdate),
    path("userDelete/<pk>",userDelete),
    path("carDelete/<pk>",carDelete),
    path("cars",cars),
    path("car/<pk>",car),
    path("carPost/",carPost),
    path("carUpdate/<pk>",carUpdate),
    # user endpoints
    path('auth/', include('knox.urls')),
    path('auth/register', SignUpAPI.as_view()),
    path('auth/login', SignInAPI.as_view()),
    path('auth/user', MainUser.as_view()),
    path('auth/logout',knox_views.LogoutView.as_view(), name="knox-logout"),

]