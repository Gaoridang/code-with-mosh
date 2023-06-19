import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";

export interface Movie {
  id: number;
  adult: string;
  backdrop_path: string;
  poster_path: string;
  original_title: string;
  title: string;
  vote_average: number;
}

interface MovieResponse {
  dates: {
    maximum: string;
    minimun: string;
  };
  page: number;
  results: Movie[];
}

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<MovieResponse>("/now_playing", { signal: controller.signal })
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
