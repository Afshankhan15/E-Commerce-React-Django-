from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
from .managers import CustomUserManager

class User(AbstractUser):
    username = None
    email = models.EmailField(max_length=254,unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [] # take 'username' if required
    # objects = CustomUserManager()
    
    def __str__(self):
        return self.email #it will by deafult show the email of user


class Products(models.Model):
    name = models.CharField(max_length=150)
    price = models.IntegerField()
    image_url = models.URLField(max_length=200, null=True, blank=True)  # New field to store image URL
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, related_name='products', on_delete=models.CASCADE)