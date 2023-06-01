from django.db import models
from django.core.validators import RegexValidator

# Create your models here.
class LastLogin(models.Model):
    title = models.TextField(max_length=100,blank=True)
    name = models.TextField(max_length=100,blank=True)
    def __str__(self):
        return self.title
    
class Registration(models.Model):

    email_validator = RegexValidator(regex='^\w+(_?\w*)*-?\w*(_?\w*)*@\w+(\.\w*)+$', message='xxxxxx@xxxxxx')
    phone_validator = RegexValidator(regex='^\+?3?8?0?\d{2}[ -]?(\d[ -]?){7}$',
									 message='the number should have the following format: +380xx xxx xx xx')
    name = models.TextField(max_length=100,blank=True)
    country = models.CharField(max_length=100)
    email = models.CharField(max_length=100, validators=(email_validator, ))
    phone = models.CharField(max_length=16, validators=(phone_validator, ))
    password = models.CharField(max_length=100)

class People(models.Model):
    adult = models.BooleanField(default=False)
    gender = models.IntegerField()
    id = models.IntegerField(primary_key=True)
    known_for = models.JSONField()
    known_for_department = models.CharField(max_length=500)
    name = models.CharField(max_length=500)
    popularity = models.FloatField()
    profile_path = models.CharField(max_length=500) 

class Movies(models.Model):
    adult = models.BooleanField(default=False)
    backdrop_path = models.CharField(max_length=500)
    genre_ids = models.JSONField()
    id = models.IntegerField(primary_key=True)
    original_language = models.CharField(max_length=500)
    original_title = models.CharField(max_length=500)
    overview = models.CharField(max_length=500)
    popularity = models.FloatField()
    poster_path = models.CharField(max_length=500)
    release_date = models.CharField(max_length=500)
    title = models.CharField(max_length=500)
    video = models.BooleanField(default=False)
    vote_average = models.FloatField()
    vote_count = models.IntegerField()

#Communication with the administrator via "About"

class Notification(models.Model):
    email_validator = RegexValidator(regex='^\w+(_?\w*)*-?\w*(_?\w*)*@\w+(\.\w*)+$', message='xxxxxx@xxxxxx')
    email = models.CharField(max_length=100, validators=(email_validator, ))
    subject = models.CharField(max_length=500)    
    notification = models.CharField(max_length=1500)
    date_request = models.DateTimeField(auto_now_add=True)
    name = models.TextField(max_length=100,blank=True)

#Add fields to store user data

class AddMovies(models.Model):
    name = models.TextField(max_length=100,blank=True)
    id_movie = models.IntegerField()    

