import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { Genre } from '../../models/genre.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly httpClient = inject(HttpClient);

  getGenreList(): Observable<Genre[]> {
    return this.httpClient.get<any[]>('http://127.0.0.1:8000/api/genres/');
  }

  getMovieList(genreId: string): Observable<Movie[]> {
    return this.httpClient.get<any[]>(
      `http://127.0.0.1:8000/api/genres/${genreId}/movies/`
    );
  }

  getMovie(movieId: string): Observable<Movie> {
    return this.httpClient.get<any>(
      'http://127.0.0.1:8000/api/movies/' + movieId
    );
  }
}
