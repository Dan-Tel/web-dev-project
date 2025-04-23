from rest_framework import serializers
from .models import Country, ProductionCompany, Genre, Movie

class CountrySerializer(serializers.ModelSerializer):
  class Meta:
    model = Country
    fields = '__all__'

class ProductionCompanySerializer(serializers.ModelSerializer):
  class Meta:
    model = ProductionCompany
    fields = '__all__'

class GenreSerializer(serializers.ModelSerializer):
  class Meta:
    model = Genre
    fields = '__all__'

class MovieSerializer(serializers.ModelSerializer):
  class Meta:
    model = Movie
    fields = '__all__'
