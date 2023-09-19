import { baseUrl } from "../utils/constants";
import { MovieDetailType } from "../utils/types";

export const getMoviesList = async (): Promise<MovieDetailType[]> => {
  return fetch(baseUrl + "/api/getmovies")
    .then((res) => res.json())
    .then((res) => res.movies)
    .catch(() => {
      throw new Error("Failed to Fetch GetMovies API");
    });
};

export const postDetails = async ({
  id,
  description,
}: {
  id: number;
  description: string;
}): Promise<Response> => {
  return await fetch(baseUrl + "/api/updatedetails", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
      description,
    }),
  });
};
