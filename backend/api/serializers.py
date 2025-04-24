from rest_framework import serializers
from .models import Country, ProductionCompany, Genre, Movie

class CountrySerializer(serializers.Serializer):
  id = serializers.IntegerField(read_only=True)
  name = serializers.CharField(max_length=100)
  flag = serializers.CharField(max_length=100)

class ProductionCompanySerializer(serializers.Serializer):
  id = serializers.IntegerField(read_only=True)
  name = serializers.CharField(max_length=100)
  headquarters = serializers.CharField(max_length=200, allow_blank=True)

class GenreSerializer(serializers.ModelSerializer):
  class Meta:
    model = Genre
    fields = '__all__'

class MovieSerializer(serializers.ModelSerializer):
  class Meta:
    model = Movie
    fields = '__all__'
