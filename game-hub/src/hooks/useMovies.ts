import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Movie {
  id: number;
  adult: string;
  backdrop_path: string;
  poster_path: string;
  original_title: string;
  title: string;
  vote_average: number;
}

export interface MovieResponse {
  dates: {
    maximum: string;
    minimun: string;
  };
  page: number;
  results: Movie[];
}

const useMovies = (url: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<MovieResponse>(url, { signal: controller.signal })
      .then((res) => {
        console.log("fetch succeeded");
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { movies, error };
};

export default useMovies;
