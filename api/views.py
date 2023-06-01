
from django.contrib.auth import logout, authenticate, login
from django.contrib.auth.models import User
from rest_framework import viewsets, mixins
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.exceptions import ValidationError
from rest_framework.authentication import BasicAuthentication
from backend_django_rest import key
import requests
import json
from rest_framework import filters
from rest_framework import generics
from .models import People, Movies, LastLogin, AddMovies
from .serializers import RegisterSerializer, LoginSerializer, PeopleSerializer, LastLoginSerializer, MovieSerializer, NotificationSerializer, UserFileSerializer

# Create your views here.

#Pagination for Data
class DataPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 100

    def get_paginated_response(self, data):
        response = super().get_paginated_response(data)
        response.data['total_pages'] = self.page.paginator.num_pages
        return response

#Pagination for Search
class SearchPagination(PageNumberPagination):
    page_size = 10000
    page_size_query_param = 'page_size'
    max_page_size = 1

    def get_paginated_response(self, data):
        response = super().get_paginated_response(data)
        response.data['total_pages'] = self.page.paginator.num_pages
        return response

class ImagePeopleViewSet(viewsets.ModelViewSet):
    queryset = People.objects.all()
    serializer_class = PeopleSerializer
    pagination_class = SearchPagination 

class ImageMoviesViewSet(viewsets.ModelViewSet):
    queryset = Movies.objects.all()
    serializer_class = MovieSerializer
    pagination_class = SearchPagination 

class SearchPeopleViewSet(viewsets.ModelViewSet):
    queryset = People.objects.all()
    serializer_class = PeopleSerializer
    pagination_class = SearchPagination 
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']  

class SearchMoviesViewSet(viewsets.ModelViewSet):
    queryset = Movies.objects.all()
    serializer_class = MovieSerializer
    pagination_class = SearchPagination 
    filter_backends = [filters.SearchFilter]
    search_fields = ['title']  


class PeopleViewSet(generics.ListAPIView, mixins.CreateModelMixin,
                mixins.RetrieveModelMixin,
                mixins.UpdateModelMixin,
                  # mixins.DestroyModelMixin,
                mixins.ListModelMixin,
                viewsets.GenericViewSet):
    queryset = People.objects.all()
    serializer_class = PeopleSerializer
    lookup_field = 'id'
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']
    pagination_class = DataPagination
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        serialized_data = serializer.data
        serialized_data['people_url'] = 'https://image.tmdb.org/t/p/original'
        serialized_data['people_scroll_url'] = 'http://image.tmdb.org/t/p/w500'
        return Response(serialized_data)
    

class MoviesViewSet(generics.ListAPIView, mixins.CreateModelMixin,
                mixins.RetrieveModelMixin,
                mixins.UpdateModelMixin,
                  # mixins.DestroyModelMixin,
                mixins.ListModelMixin,
                viewsets.GenericViewSet):
    queryset = Movies.objects.all()
    serializer_class = MovieSerializer
    lookup_field = 'id'
    pagination_class = DataPagination
    filter_backends = [filters.SearchFilter]
    search_fields = ['title']
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        serialized_data = serializer.data
        serialized_data['movies_url'] = 'https://image.tmdb.org/t/p/original'
        serialized_data['movies_select_url'] = 'https://www.themoviedb.org/t/p/w94_and_h141_bestv2'
        return Response(serialized_data)

@api_view(['POST'])
def notification(request):
    email = request.data.get('email') 
    name = User.objects.filter(email=email)
    if name:
        username_list = name.values_list('username', flat=True)
        data = request.data
        data['name'] = username_list[0]
        serializer = NotificationSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
        else:
            pass
        return Response({'notificationRespons': 'Request has been saved!'})
    else:
        data = request.data
        serializer = NotificationSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
        else:
            pass
        return Response({'notificationRespons': 'Request has been saved!'})   

@api_view(['POST'])
def register(request):
    name = request.data.get('name')
    email = request.data.get('email')
    password = request.data.get('password')

    user_exists = User.objects.filter(username=name).exists()
    if user_exists:
        return ValidationError('A user with such data already exists!')
    else:
        user = User.objects.create_user(name, email, password)
        user.save()
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            data = serializer.data
            data['id'] = user.id
        return Response({'registrationRespons': data})


@api_view(['POST', 'DELETE'])
@permission_classes([IsAuthenticated])
@authentication_classes([BasicAuthentication])
def user(request: Request):
    if request.method == 'POST':
        username = request.user
        password = request.user.password
        try:
            user = authenticate(username=username, password=password)
            login(request, user)
            last_login = username.last_login
            format_last_sesion = last_login.strftime('%d-%m-%Y, %H:%M')
            last_login_serializer = LastLoginSerializer(data={'name': f'{username}', 'title': f'{format_last_sesion}'})
            filter_name = LastLogin.objects.filter(name=username)
            first_filter_name = filter_name.first()
            if filter_name and last_login_serializer.is_valid():
                if len(filter_name) < 5:
                    last_login_serializer.save() 
                if len(filter_name) == 5:  
                    first_filter_name.delete()
                    last_login_serializer.save() 
            if not filter_name and last_login_serializer.is_valid():
                last_login_serializer.save()  
            atribyt = [f'{i}' for i in filter_name]
            add_last_login = LoginSerializer(request.user).data            
            add_last_login['last_login'] = atribyt
            return Response({
                'loginRespons': add_last_login})
        except User.DoesNotExist:
            return ValidationError('User not found')
        
    if request.method == 'DELETE':
            username = request.data.get('name')
            try:
                user = User.objects.get(username=username)
                user.delete()
                return Response({'message': 'User deleted successfully'})
            except User.DoesNotExist:
                return Response({'message': 'User not found'}, status=404)


@api_view()
def logout_view(request):
	logout(request)
	return Response({'message': 'Logout!'})


@api_view(['GET'])
def add_movies(request, pk=1):
    apiRequst = requests.get(f'https://api.themoviedb.org/3/movie/popular?api_key={key.api_key}&language=en-US&page={pk}')
    json_data = json.loads(apiRequst.content)
    results_data = json_data.get('results')

    for item_data in results_data:
        serializer = MovieSerializer(data=item_data)
        known_for = item_data.get('id')
        movies_data = Movies.objects.filter(id=known_for)
        if serializer.is_valid() and not movies_data:
            serializer.save()
        else:
             pass
    return Response(json_data)

@api_view(['GET'])
def add_people(request, pk=1):
    apiRequst = requests.get(f'https://api.themoviedb.org/3/person/popular?api_key={key.api_key}&language=en-US&page={pk}')
    json_data = json.loads(apiRequst.content)
    results_data = json_data.get('results')

    for item_data in results_data:
        serializer = PeopleSerializer(data=item_data)
        known_for = item_data.get('id')
        people_data = People.objects.filter(id=known_for)
        if serializer.is_valid() and not people_data:
            serializer.save()
        else:
             pass
    return Response(json_data)

#Add user profile data

@permission_classes([IsAuthenticated])
@api_view(['POST'])
def add_movies_in_account(request):
    id_movie = request.data.get('id')
    serializer = UserFileSerializer(data={'name':f'{request.user}', 'id_movie': f'{id_movie}'})
    primary_movie = AddMovies.objects.filter(id_movie=id_movie)
    if not primary_movie:
        if serializer.is_valid():
            serializer.save()
            user_movies = AddMovies.objects.filter(name=request.user)
            respons_objects = []
            for objects in user_movies:
                movies_objects = Movies.objects.get(id=objects.id_movie)
                serializer_movie = MovieSerializer(movies_objects)
                respons_objects.append(serializer_movie.data)
            return Response({'UserFilesResponse': respons_objects})
    return Response({'UserFilesResponse': 'The object is already present!'})
        
