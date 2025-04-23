export interface Movie {
  id?: number;
  title: string;
  description: string;
  genres: string[];
  director: string;
  actors: string[];
  duration: number | null;
  poster_url: string;
  trailer_url: string;
  release_year: number | null;
  rating: number | null;
  production_company: string;
  country: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Country {
  id: number;
  name: string;
  flag: string;
}

export interface ProductionCompany {
  id: number;
  name: string;
  headquarters: string;
}
