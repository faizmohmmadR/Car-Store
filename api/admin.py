from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import User,Car,Chat,Address
# admin.site.register(User)
admin.site.register(Car)
admin.site.register(Chat)
admin.site.register(Address)
