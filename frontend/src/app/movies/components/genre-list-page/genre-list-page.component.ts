import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { MoviesService } from '../../services/movies/movies.service';
import { Genre } from '../../models/genre.model';

@Component({
  selector: 'app-genre-list-page',
  imports: [RouterLink, NgFor],
  templateUrl: './genre-list-page.component.html',
  styleUrl: './genre-list-page.component.css',
})
export class GenreListPageComponent {
  private readonly moviesService = inject(MoviesService);
  genres: Genre[] = [];

  ngOnInit(): void {
    this.moviesService.getGenreList().subscribe((genres) => {
      this.genres = genres;
    });
  }
}
