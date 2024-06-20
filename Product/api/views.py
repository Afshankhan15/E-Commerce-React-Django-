from django.shortcuts import render
from .models import User, Products
from .serializers import UserSerializer, ProductSerializer
from django.http import JsonResponse, HttpResponse
from rest_framework import status
import json
from rest_framework.decorators import api_view, permission_classes
from django.views.decorators.csrf import csrf_exempt

from django.contrib.auth import authenticate, login
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated


# Create your views here.

# Register View
@csrf_exempt
@api_view(['POST'])
def RegisterUser(request):
    data = json.loads(request.body)
    print(data)
    serializer = UserSerializer(data = data)
    if serializer.is_valid():
        serializer.save()
        response_data = {
            "status" : "success",
            "data" : serializer.data
        }
        return JsonResponse(response_data, status = status.HTTP_201_CREATED)
    else:
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(['POST'])
def LoginUser(request):
    data = json.loads(request.body)
    email = data.get('email')
    password = data.get('password')

    verifyUser = authenticate(email = email, password = password)
    if verifyUser is None:
        return JsonResponse({"error": "Invalid Credentails"}, status = status.HTTP_400_BAD_REQUEST)
    
    login(request, verifyUser)
    refresh = RefreshToken.for_user(verifyUser)
    return JsonResponse({
        'status' : "success",
        'access_token' : str(refresh.access_token),
        'refresh_token' : str(refresh)
    }, status = status.HTTP_200_OK)



@csrf_exempt
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_product(request):
    try:
        data = json.loads(request.body)
        print("Data product", data)
        print("REQ: ",request.user) #afshan@123gmail.com -> it will take email bcz in user u did ->  return self.email
        serializer = ProductSerializer(data = data)
        if serializer.is_valid():
            serializer.save(user = request.user) # here user = 3 not user = afshan@123gmail.com (bcz in comparison it will take PK of user model)
            response_data = {
                'status' : 'success',
                'data' : serializer.data
            }
            return JsonResponse(response_data, status = status.HTTP_201_CREATED)
        else:
            return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return JsonResponse({'error': 'Something went wrong'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# @csrf_exempt
# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def get_product(request):
#     try:
#         product = Products.objects.filter(user=request.user)
#         serializer = ProductSerializer(product, many=True)
#         return JsonResponse({'status': 'success', 'data': serializer.data}, safe=False, status=status.HTTP_200_OK)
#     except Exception as e:
#         return JsonResponse({'error': 'Something went wrong'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# for filter
@csrf_exempt
@api_view(['POST']) #post not get because for filter we send name of product in search bar
@permission_classes([IsAuthenticated])
def get_product(request):
    try:
        # Parse the JSON body
        data = json.loads(request.body.decode('utf-8'))
        product_name = data.get('name', None)

        # Filter products based on the user and product name (if provided)
        if product_name:
            products = Products.objects.filter(user=request.user, name__icontains=product_name)
        else:
            products = Products.objects.filter(user=request.user)

        serializer = ProductSerializer(products, many=True)
        return JsonResponse({'status': 'success', 'data': serializer.data}, safe=False, status=status.HTTP_200_OK)
    except Exception as e:
        return JsonResponse({'error': 'Something went wrong', 'details': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@csrf_exempt
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_product(request, product_id):
    try:
        delete_product = Products.objects.get(id = product_id, user = request.user)
        delete_product.delete()
        return JsonResponse({'message' : 'Product deleted successfully'}, status = status.HTTP_200_OK)
    except Products.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return JsonResponse({'error': 'Something went wrong'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# @csrf_exempt -> Removed @csrf_exempt: Since you are using IsAuthenticated permission, CSRF protection should be enabled
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_product(request, product_id):
    data = json.loads(request.body)
    print("update data : ", data) # update data :  {'name': 'HITACHI -8', 'price': '94'}
    # data = request.data  # Use request.data instead of json.loads when we use @api_view since it handles JSON parsing and form data.
    try:
        update_product = Products.objects.get(id = product_id, user = request.user)
        serializer = ProductSerializer(update_product, data = data)
        if serializer.is_valid():
            serializer.save()
            response_data = {
                'status' : 'success',
                'data' : serializer.data
            }
            return JsonResponse(response_data, status = status.HTTP_200_OK)
        else:
            return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    except Products.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return JsonResponse({'error': 'Something went wrong'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
