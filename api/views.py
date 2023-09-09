# Create your views here.
from rest_framework.decorators import api_view
from rest_framework import viewsets
from rest_framework.response import Response
from django.shortcuts import render
from .serializers import *
from .models import *


from django.contrib import auth
from rest_framework import generics, permissions, serializers
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer


class SignUpAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = AuthToken.objects.create(user)
        return Response({
            "users": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token[1]
        })


class SignInAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class MainUser(generics.RetrieveAPIView):
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

@api_view(["GET"])
def users(request):
    users = User.objects.all()
    users_serialize = UserSerializer(users, many=True)
    return Response(users_serialize.data)


@api_view(["GET"])
def user(request, pk):
    user = User.objects.get(id=pk)
    user_serialize = UserSerializer(user, many=False)
    return Response(user_serialize.data)


@api_view(["POST"])
def userPost(request):
    user = UserSerializer(data=request.data)

    if user.is_valid():
        user.save()
    return Response(user.data)


@api_view(["POST"])
def userUpdate(request, pk):
    instance = User.objects.get(id=pk)
    user = UserSerializer(instance=instance, data=request.data)

    if user.is_valid():
        user.save()
    return Response(user.data)


@api_view(["DELETE"])
def userDelete(request, pk):
    instance = User.objects.get(id=pk)
    instance.delete()

    return Response("User Deleted")


class AdderssViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer


class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer


@api_view(["GET"])
def cars(request):
    cars = Car.objects.all()
    cars_serialize = CarSerializer(cars, many=True)

    return Response(cars_serialize.data)


@api_view(["GET"])
def car(request, pk):
    car = Car.objects.get(id=pk)
    car_serialize = CarSerializer(car, many=False)

    return Response(car_serialize.data)


@api_view(["POST"])
def carPost(request):
    car = CarSerializer(data=request.data)

    if car.is_valid():
        car.save()
    return Response(car.data)


@api_view(["POST"])
def carUpdate(request, pk):
    instance = Car.objects.get(id=pk)
    car = CarSerializer(instance=instance, data=request.data)

    if car.is_valid:
        car.save()

    return Response(car.data)


@api_view(["DELETE"])
def carDelete(request, pk):
    instance = Car.objects.get(id=pk)
    instance.delete()

    return Response("Car Deleted!")


class ChatViewSet(viewsets.ModelViewSet):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer
