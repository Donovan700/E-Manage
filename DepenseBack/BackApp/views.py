from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from BackApp.serialize import UserSerializer,CategorieSerializer,DepenseSerializer
from BackApp.models import *

# Create your views here.
def home(request):
    return HttpResponse("hello")

## For user only

class UserAdd(APIView):
    def post(self,request):
        UserObj = UserSerializer(data=request.data)
        if UserObj.is_valid():
            UserObj.save()
            return Response(200)
        return Response(UserObj.errors)
    

class UserShow(APIView):
    def get(self,request):
        UserObj = User.objects.all()
        Serialise = UserSerializer(UserObj,many=True)
        return Response(Serialise.data)

class UserUpdate(APIView):
    def post(self,request,pk):
        try:
            UpdateObj = User.objects.get(pk=pk)
        except:
            return Response("Error in Database")
        
        UserObj = UserSerializer(UpdateObj,data=request.data)
        if UserObj.is_valid():
            UserObj.save()
            return Response(200)
        return Response(UserObj.errors)
    

class UserDelete(APIView):
    def post(self,request,pk):
        try:
            DeleteObj = User.objects.get(pk=pk)
        except:
            return Response("Error in Database")
        DeleteObj.delete()
        return Response(200)
        return Response(UserObj.errors)


#For Categorie only

class CategorieAdd(APIView):
    def post(self,request):
        CategorieObj = CategorieSerializer(data=request.data)
        if CategorieObj.is_valid():
            CategorieObj.save()
            return Response(200)
        return Response(CategorieObj.errors)
    

class CategorieShow(APIView):
    def get(self,request):
        CategorieObj = Categorie.objects.all()
        Serialise = CategorieSerializer(CategorieObj,many=True)
        return Response(Serialise.data)

class CategorieUpdate(APIView):
    def post(self,request,pk):
        try:
            UpdateObj = Categorie.objects.get(pk=pk)
        except:
            return Response("Error in Database")
        
        CategorieObj = CategorieSerializer(UpdateObj,data=request.data)
        if CategorieObj.is_valid():
            CategorieObj.save()
            return Response(200)
        return Response(CategorieObj.errors)
    

class CategorieDelete(APIView):
    def post(self,request,pk):
        try:
            DeleteObj = Categorie.objects.get(pk=pk)
        except:
            return Response("Error in Database")
        DeleteObj.delete()
        return Response(200)
        return Response(UserObj.errors)
    
#For Depense

class DepenseAdd(APIView):
    def post(self,request):
        DepenseObj = DepenseSerializer(data=request.data)
        if DepenseObj.is_valid():
            DepenseObj.save()
            return Response(200)
        return Response(DepenseObj.errors)
    

class DepenseShow(APIView):
    def get(self,request):
        DepenseObj = Depense.objects.all()
        Serialise = DepenseSerializer(DepenseObj,many=True)
        return Response(Serialise.data)

class DepenseUpdate(APIView):
    def post(self,request,pk):
        try:
            UpdateObj = Depense.objects.get(pk=pk)
        except:
            return Response("Error in Database")
        
        DepenseObj = DepenseSerializer(UpdateObj,data=request.data)
        if DepenseObj.is_valid():
            DepenseObj.save()
            return Response(200)
        return Response(DepenseObj.errors)
    

class DepenseDelete(APIView):
    def post(self,request,pk):
        try:
            DeleteObj = Depense.objects.get(pk=pk)
        except:
            return Response("Error in Database")
        DeleteObj.delete()
        return Response(200)