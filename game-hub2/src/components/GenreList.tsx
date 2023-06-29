import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

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
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;