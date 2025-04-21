from django.http import JsonResponse;
from rest_framework.decorators import api_view;
from .models import Movie, Genre;
# Create your views here.

@api_view(['GET'])
def get_movies_by_genre(request, genre_id):
  movies = list(Genre.objects.get(pk=genre_id).movies.all().values())
  return JsonResponse(movies, safe=False)

@api_view(['GET'])
def get_movie_by_id(request, movie_id):
  movie = Movie.objects.get(pk=movie_id)
  
  movie_data = {
    "id": movie.id,
    "title": movie.title,
    "description": movie.description,
    "genres": list(movie.genres.values_list("name", flat=True)),
    "release_year": movie.release_year,
    "director": movie.director,
    "duration": movie.duration,
    "rating": movie.rating,
    "actors": movie.actors,
    "poster_url": movie.poster_url,
    "trailer_url": movie.trailer_url,
  }
  
  return JsonResponse(movie_data)


@api_view(['GET'])
def get_genres(request):
  genres = list(Genre.objects.all().values())
  return JsonResponse(genres, safe=False)
