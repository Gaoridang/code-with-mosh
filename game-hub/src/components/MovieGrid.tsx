import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";

const MovieGrid = () => {
  const { movies, error } = useMovies("/now_playing");

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={10}
        paddingX={"10px"}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
