from django.contrib import admin
from .models import People, Movies

# Register your models here.
# admin.site.register(People)
# admin.site.register(Movies)

@admin.register(People)
class PeopleAdmin(admin.ModelAdmin):
	list_display = ['name', 'known_for_department']
	list_filter = ['known_for_department']
	
@admin.register(Movies)
class MoviesAdmin(admin.ModelAdmin):
	list_display = ['title', 'release_date', 'original_language']
	list_filter = ['release_date', 'original_language']