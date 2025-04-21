import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { MoviesService } from '../../services/movies/movies.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-detail-page',
  imports: [NgIf],
  templateUrl: './movie-detail-page.component.html',
  styleUrl: './movie-detail-page.component.css',
})
export class MovieDetailPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly moviesService = inject(MoviesService);
  private readonly sanitizer = inject(DomSanitizer);

  movieId: string = '';
  movie: any = null;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movieId = params['movieId'];

      this.moviesService.getMovie(this.movieId).subscribe((movie) => {
        console.log(movie);
        this.movie = movie;
      });
    });
  }

  trailerUrl() {
    return this.movie
      ? this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer_url)
      : '';
  }
}
