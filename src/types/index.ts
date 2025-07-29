export type SearchResultMovie = {
  id: string
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  rating: number;
};

export type SearchResultMovies = {
  page: number;
  results: SearchResultMovie[];
  total_pages: number;
  total_results: number;
}

export type ListMoviesGenre = {
  genres: Genre[];
}


export type SearchResultPerson = {
  id: string;
  name: string;
  profile_path: string;
  adult: boolean;
  gender: number;
  known_for_department: string;
  known_for: SearchResultMovie[];
  original_name: string;
  popularity: number;
}

export type SearchResultPeople = {
  page: number;
  results: SearchResultPerson[];
  total_pages: number;
  total_results: number;
};

export type TVShow = {
  id: number;
  name: string;
  overview: string;
  first_air_date: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  genre_ids: number[];
  original_language: string;
  popularity: number;
  vote_count: number;
};


export type Genre = {
  id: number;
  name: string;
}

export type Country = {
  iso_3166_1: string;
  name: string;
};

export type Language = {
  iso_639_1: string;
  name: string;
};

export type Provider = {
  display_priority: number;
  logo_path: string;
  provider_id: number;
  provider_name: string;
};

export type Video = {
  id: string;
  key: string;
  site: "YouTube";
  type: "Trailer" | "Teaser" | "Clip";
  name: string;
};

export type VideoResponse = {
  results: Video[];
};

export type PaginatedResponse<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};
