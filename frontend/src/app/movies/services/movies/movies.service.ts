import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly httpClient = inject(HttpClient);

  getGenreList(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://127.0.0.1:8000/api/genres/');
  }

  getMovieList(genreId: string): Observable<any[]> {
    return this.httpClient.get<any[]>(
      'http://127.0.0.1:8000/api/genres/movies/' + genreId
    );
  }

  getMovie(movieId: string): Observable<any> {
    return this.httpClient.get<any>(
      'http://127.0.0.1:8000/api/movies/' + movieId
    );
  }
}
