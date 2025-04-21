export interface Movie {
  id: number;
  title: string;
  description: string;
  genres: string[];
  director: string;
  actors: string[];
  duration: number;
  poster_url: string;
  trailer_url: string;
  release_year: number;
  rating: number;
}
