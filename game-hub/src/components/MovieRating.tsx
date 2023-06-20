import { Text } from "@chakra-ui/react";
import {
  BsEmojiHeartEyesFill,
  BsEmojiWinkFill,
  BsEmojiNeutralFill,
} from "react-icons/bs";

interface Props {
  rating: number | undefined;
}

const getRatingIcon = (rating: number | undefined) => {
  if (rating) {
    return rating >= 8 ? (
      <BsEmojiHeartEyesFill />
    ) : rating >= 7 ? (
      <BsEmojiWinkFill />
    ) : (
      <BsEmojiNeutralFill />
    );
  }
};

const MovieRating = ({ rating }: Props) => {
  return <Text>{getRatingIcon(rating)}</Text>;
};

export default MovieRating;
