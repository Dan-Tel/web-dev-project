from django.http import JsonResponse;
from rest_framework.decorators import api_view;
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Movie, Genre, Country, ProductionCompany;
from .serializers import GenreSerializer, MovieSerializer, CountrySerializer, ProductionCompanySerializer
# Create your views here.

@api_view(['GET'])
def get_movies_by_genre(request, genre_id):
  genre = Genre.objects.get(pk=genre_id)
  movies = genre.movies.all()
  serializer = MovieSerializer(movies, many=True)
  return Response(serializer.data)

@api_view(['GET'])
def get_movie_by_id(request, movie_id):
    movie = Movie.objects.get(pk=movie_id)
    serializer = MovieSerializer(movie)
    return Response(serializer.data)

@api_view(['POST'])
def add_movie(request):
  serializer = MovieSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_genres(request):
  genres = Genre.objects.all()
  serializer = GenreSerializer(genres, many=True)
  return Response(serializer.data)

class CountryListAPIView(APIView):
  def get(self, request):
    countries = Country.objects.all()
    serializer = CountrySerializer(countries, many=True)
    return Response(serializer.data)

class ProductionCompanyListAPIView(APIView):
  def get(self, request):
    companies = ProductionCompany.objects.all()
    serializer = ProductionCompanySerializer(companies, many=True)
    return Response(serializer.data)
