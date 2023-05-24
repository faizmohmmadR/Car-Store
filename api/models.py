from django.db import models
from django.contrib.auth.models import User

# Create your models here.

def upload_path(instance, filename):
    return '/'.join(['images', str(instance.userName), filename])


class User(models.Model):
    firstName = models.CharField(max_length=50,null=False,blank=False)
    lastName = models.CharField(max_length=50,null=False,blank=False)
    userName = models.CharField(max_length=50,null=False,blank=False)
    email = models.EmailField(null=False,blank=False)
    password = models.CharField(max_length=20,null=False,blank=False)
    userType = models.CharField(max_length=50,null=False,blank=False)
    phone = models.CharField(max_length=50,null=True,blank=True)
    image = models.ImageField(upload_to=upload_path,null=False,blank=False,default='')
    def __str__(self):
        return self.userName



class Address(models.Model):
    province = models.CharField(max_length=20)
    district = models.CharField(max_length=20)
    area = models.CharField(max_length=40)

    def __str__(self):
        return self.province
    

class Car(models.Model):
    name = models.CharField(max_length=50,null=False,blank=False)
    description = models.TextField()
    price = models.IntegerField(null=False,blank=False)
    enginType = models.CharField(max_length=50,null=True,blank=True)
    numberPalit = models.CharField(max_length=50,null=True,blank=True)
    carState = models.CharField(max_length=20)
    carSellState = models.CharField(max_length=50,null=True,blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="ad_user")
    address = models.ForeignKey(Address, on_delete=models.CASCADE, related_name="ad_address")
    image = models.ImageField(upload_to='image/images',null=False,blank=False,default='')

    def __str__(self):
        return self.name
    

class Chat(models.Model):
    content = models.TextField()
    dateTime = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE,related_name="user")
    def __str__(self):
        return self.content
    
    
# class Image(models.Model):
#     # Relations
#     car = models.ForeignKey("car", on_delete=models.CASCADE, related_name="images")
#     image = models.ImageField(
#         upload_to="frontend/static/images/ad/%Y/%m/%d/",
#         blank=True,
#         null=True,
#         default="",
#     )

#     def __str__(self):
#         return self.image.name
