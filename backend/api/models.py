from django.db import models

# Create your models here.
class Country(models.Model):
    name = models.CharField(max_length=100)
    flag = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.flag} {self.name}"

class ProductionCompany(models.Model):
    name = models.CharField(max_length=100)
    headquarters = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.name

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
  country = models.ForeignKey(Country, on_delete=models.CASCADE, null=True, related_name='movies')
  production_company = models.ForeignKey(ProductionCompany, on_delete=models.SET_NULL, null=True, related_name='movies')

  def __str__(self):
    return self.title

class Genre(models.Model):
  name = models.CharField(max_length=50)

  def __str__(self):
    return self.name
