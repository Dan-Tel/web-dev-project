from django.contrib import admin
from .models import Movie, Genre, Country, ProductionCompany;

# Register your models here.
admin.site.register(Movie);
admin.site.register(Genre);
admin.site.register(Country);
admin.site.register(ProductionCompany);