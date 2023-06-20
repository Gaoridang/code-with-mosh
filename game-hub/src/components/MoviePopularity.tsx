import { Badge } from "@chakra-ui/react";

interface Props {
  popularity: number | undefined;
}

const MoviePopularity = ({ popularity }: Props) => {
  return <Badge>{popularity?.toFixed(0)}</Badge>;
};

export default MoviePopularity;
