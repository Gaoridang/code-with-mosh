import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Movie {
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

const MovieGrid = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<MovieResponse>("/now_playing")
      .then((res) => setMovies(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      {movies.map((movie) => (
        <ul key={movie.id}>{movie.title}</ul>
      ))}
    </>
  );
};

export default MovieGrid;
