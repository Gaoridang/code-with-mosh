import { HStack, Image, Link, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} mb={3}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={5}
              src={genre.image_background}
            />
            <Link onClick={() => onSelectGenre(genre)}>{genre.name}</Link>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
