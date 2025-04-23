import { Routes } from '@angular/router';
import { GenreListPageComponent } from './movies/components/genre-list-page/genre-list-page.component';
import { MovieListPageComponent } from './movies/components/movie-list-page/movie-list-page.component';
import { MovieDetailPageComponent } from './movies/components/movie-detail-page/movie-detail-page.component';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { AdminPageComponent } from './movies/components/admin-page/admin-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'genres', component: GenreListPageComponent },
  { path: 'genres/:genreId', component: MovieListPageComponent },
  { path: 'genres/:genreId/:movieId', component: MovieDetailPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
