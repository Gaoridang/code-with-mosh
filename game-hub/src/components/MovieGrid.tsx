import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";

const MovieGrid = () => {
  const { movies, error, isLoading } = useMovies(
    `now_playing?api_key=32d1fdd15a2e73be30c8996ea6d32aa1`
  );
  const skeletons = [1, 2, 3, 4, 5, 6];

  console.log(isLoading);

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
        {isLoading && skeletons.map((s) => <MovieCardSkeleton key={s} />)}
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
