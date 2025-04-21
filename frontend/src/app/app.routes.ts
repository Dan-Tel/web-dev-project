import { Routes } from '@angular/router';
import { GenreListPageComponent } from './movies/components/genre-list-page/genre-list-page.component';

export const routes: Routes = [
  { path: 'genres', component: GenreListPageComponent },
  { path: '', redirectTo: 'genres', pathMatch: 'full' },
];
