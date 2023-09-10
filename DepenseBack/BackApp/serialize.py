from rest_framework import serializers
from BackApp.models import User,Categorie,Depense

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

class CategorieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorie
        fields = "__all__"
    
class DepenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Depense
        fields = "__all__"