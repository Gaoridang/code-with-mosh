import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import { makeImagePath } from "../services/api-client";
import useDetails from "../hooks/useDetails";
import MovieRating from "./MovieRating";
import MoviePopularity from "./MoviePopularity";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const { details, error } = useDetails(movie.id);

  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={makeImagePath(movie.poster_path)} />
      <CardBody>
        <Heading fontSize={"lg"} marginBottom={"8px"}>
          {movie.title}
        </Heading>
        <HStack>
          <MovieRating rating={details?.vote_average} />
          <MoviePopularity popularity={details?.popularity} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
