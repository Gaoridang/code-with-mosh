import { Card, CardBody, Image } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import { makeImagePath } from "../services/api-client";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={makeImagePath(movie.poster_path)} />
      <CardBody>{movie.title}</CardBody>
    </Card>
  );
};

export default MovieCard;
