import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies/movies.service';
import { NgFor } from '@angular/common';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-list-page',
  imports: [NgFor, RouterLink],
  templateUrl: './movie-list-page.component.html',
  styleUrl: './movie-list-page.component.css',
})
export class MovieListPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly moviesService = inject(MoviesService);

  movies: Movie[] = [];
  genre: string = '';

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.genre = params['genreId'];

      this.moviesService.getMovieList(this.genre).subscribe((movies) => {
        this.movies = movies;
      });
    });
  }
}
