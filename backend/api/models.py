from django.db import models

# Create your models here.
class Movie(models.Model):
  title = models.CharField(max_length=100)
  description = models.TextField()
  genres = models.ManyToManyField('Genre', related_name='movies')
  actors = models.JSONField(default=list)
  release_year = models.IntegerField()
  director = models.CharField(max_length=100)
  duration = models.IntegerField()
  rating = models.FloatField()
  poster_url = models.CharField(max_length=255)
  trailer_url = models.CharField(max_length=255)

  def __str__(self):
    return self.title

class Genre(models.Model):
  name = models.CharField(max_length=50)

  def __str__(self):
    return self.name
