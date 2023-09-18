export interface MovieDetailType {
  movie: string;
  description: string;
  id: number;
  imdb_url: string;
  rating: string;
  category?: string;
}

export type ApiResponse = {
  movies: MovieDetailType[];
};

export type CategoryType = {
  id?: number;
  genre: string;
  movieDetails: MovieDetailType[] | undefined;
};

type MovieDialogPropsType = {
  handleClose: () => void;
  open: boolean;
};

export type MovieDialogType = MovieDialogPropsType & MovieDetailType;

export type PaletteTheme = "light" | "dark" | "purple" | "teal";
