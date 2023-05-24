from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        # fields = ('firstName','lastName','userName','email','userType','phone','image')
        fields = '__all__'

class AddressSerializer(serializers.ModelSerializer):
    
    class Meta: 
        model = Address
        fields = '__all__'

class CarSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Car
        fields = '__all__'

class ChatSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Chat
        fields = '__all__'

# class ImageSerializer(serializers.ModelSerializer):
#     class Meta: 
#         model = Image
#         fields = '__all__'