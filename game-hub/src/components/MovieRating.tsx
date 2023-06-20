import { Text } from "@chakra-ui/react";
import { MovieDetail } from "../hooks/useDetails";
import {
  BsEmojiHeartEyesFill,
  BsEmojiWinkFill,
  BsEmojiNeutralFill,
} from "react-icons/bs";

interface Props {
  details: MovieDetail;
}

const getRatingIcon = (rating: number) => {
  return rating >= 8 ? (
    <BsEmojiHeartEyesFill />
  ) : rating >= 7 ? (
    <BsEmojiWinkFill />
  ) : (
    <BsEmojiNeutralFill />
  );
};

const MovieRating = ({ details }: Props) => {
  return <Text>{getRatingIcon(details.vote_average)}</Text>;
};

export default MovieRating;
