from django.contrib import admin

from django.conf import settings
from django.conf.urls.static import static

# add include to the path
from django.urls import path, include

# import routers from the REST framework
# it is necessary for routing
from rest_framework import routers
from api.views import *

from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("api.urls")),
    path('', include('frontend.urls')),  # add a url from frontend.urls
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
