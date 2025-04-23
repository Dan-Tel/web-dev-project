import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Movie,
  Genre,
  Country,
  ProductionCompany,
} from '../../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly httpClient = inject(HttpClient);

  getGenreList(): Observable<Genre[]> {
    return this.httpClient.get<Genre[]>('http://127.0.0.1:8000/api/genres/');
  }

  getMovieList(genreId: string): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(
      `http://127.0.0.1:8000/api/genres/${genreId}/movies/`
    );
  }

  getMovie(movieId: string): Observable<Movie> {
    return this.httpClient.get<Movie>(
      'http://127.0.0.1:8000/api/movies/' + movieId
    );
  }

  addMovie(movie: Movie) {
    return this.httpClient.post('http://127.0.0.1:8000/api/add-movie/', movie);
  }

  getCountriesList(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(
      'http://127.0.0.1:8000/api/countries/'
    );
  }

  getProductionCompanyList(): Observable<ProductionCompany[]> {
    return this.httpClient.get<ProductionCompany[]>(
      'http://127.0.0.1:8000/api/production_companies/'
    );
  }
}
