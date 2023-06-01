from rest_framework import serializers
from .models import LastLogin, Registration, People, Movies, Notification, AddMovies
from django.contrib.auth.models import User

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ['name', 'email', 'subject', 'notification']

class LastLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = LastLogin
        fields = ['name', 'title']

class RegisterSerializer(serializers.ModelSerializer):

    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Registration
        fields = ['id', 'name', 'email', 'password']

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'date_joined']

class PeopleSerializer(serializers.ModelSerializer):
    class Meta:
        model = People
        fields = ['adult', 'gender', 'id', 'known_for', 'known_for_department', 'name', 'popularity', 'profile_path']


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields = ['adult', 'backdrop_path', 'genre_ids', 'id', 'original_language', 'original_title', 'overview', 'popularity', 'poster_path', 'release_date', 'title', 'video', 'vote_average', 'vote_count']

class UserFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddMovies
        fields = ['id_movie', 'name']