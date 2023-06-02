from django.urls import path, include
from . import views
from .views import PeopleViewSet, MoviesViewSet, SearchPeopleViewSet, SearchMoviesViewSet, ImagePeopleViewSet, ImageMoviesViewSet
from rest_framework import routers


router = routers.SimpleRouter()
router.register(r'pop_people/image', ImagePeopleViewSet)
router.register(r'pop_movies/image', ImageMoviesViewSet)
router.register(r'pop_movies', MoviesViewSet)
router.register(r'pop_people', PeopleViewSet)
router.register(r'search/search_people', SearchPeopleViewSet)
router.register(r'search/search_movies', SearchMoviesViewSet)

urlpatterns = [
    path('', include(router.urls)), #http://127.0.0.1:8000/
    path('add_movies/', views.add_movies, name='movies'),
    path('add_movies/<str:pk>', views.add_movies, name='movies_pk'), 
    path('add_people/', views.add_people, name='people'),
    path('add_people/<str:pk>', views.add_people, name='people_pk'),
    path('registration/', views.register, name='registration'),
    path('login/', views.user, name='login'),
    path('logout/', views.logout_view, name='logout'), 
    path('about/', views.notification, name='notification'),
    path('users/account/', views.add_movies_in_account, name='add_movies_in_account')
]