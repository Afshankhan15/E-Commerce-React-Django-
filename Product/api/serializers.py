from rest_framework import serializers
from .models import User, Products
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields = '__all__'
        fields = ['email', 'password']
    
    # by default pass not hashed by serializer so that's why we serialized password here
    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super(UserSerializer, self).create(validated_data)

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        # fields = '__all__'
        fields = ['id', 'name', 'price', 'image_url', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']

