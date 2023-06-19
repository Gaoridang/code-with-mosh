import { Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";

const MovieGrid = () => {
  const { movies, error } = useMovies();

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
