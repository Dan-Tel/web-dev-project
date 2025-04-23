import { Component, inject, OnInit, signal } from '@angular/core';
import { MoviesService } from '../../services/movies/movies.service';
import {
  Country,
  Genre,
  Movie,
  ProductionCompany,
} from '../../models/movie.model';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  imports: [NgFor, FormsModule],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css',
})
export class AdminPageComponent implements OnInit {
  private readonly moviesService = inject(MoviesService);
  isSubmitDisabled = signal(true);

  movie = {
    title: '',
    description: '',
    genres: [],
    actors: '',
    release_year: null,
    director: '',
    duration: null,
    rating: null,
    poster_url: '',
    trailer_url: '',
    country: '',
    production_company: '',
  };
  genres: Genre[] = [];
  countries: Country[] = [];
  productionCompanies: ProductionCompany[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.moviesService
      .getGenreList()
      .subscribe((genres) => (this.genres = genres));

    this.moviesService
      .getCountriesList()
      .subscribe((countries) => (this.countries = countries));

    this.moviesService
      .getProductionCompanyList()
      .subscribe(
        (productionCompanies) =>
          (this.productionCompanies = productionCompanies)
      );
  }

  validateData(): boolean {
    const payload: Movie = {
      ...this.movie,
      actors: this.movie.actors ? this.movie.actors.split(',') : [],
    };

    return Object.values(payload).every((x) =>
      Array.isArray(x) ? x.length : x
    );
  }

  onChange() {
    this.isSubmitDisabled.set(!this.validateData());
  }

  createMovie() {
    const payload: Movie = {
      ...this.movie,
      actors: this.movie.actors.split(','),
    };

    if (this.validateData()) {
      this.moviesService.addMovie(payload).subscribe();
    }
  }
}
