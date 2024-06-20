from django.urls import path
from .views import *
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('registerUser/', RegisterUser, name="RegisterUser"),
    path('loginUser/', LoginUser, name="LoginUser"),
    path('add_product/', add_product, name="add_product"),
    path('get_product/', get_product, name="get_product"),
    path('delete_product/<product_id>/', delete_product, name="delete_product"),   
    path('update_product/<product_id>/', update_product, name="update_product"),    
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),

]
