import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import { makeImagePath } from "../services/api-client";
import useDetails from "../hooks/useDetails";
import MovieRating from "./MovieRating";

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
        {details && <MovieRating details={details} />}
      </CardBody>
    </Card>
  );
};

export default MovieCard;
