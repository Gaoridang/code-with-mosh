import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Text>{game.name}</Text>
        <Text>{game.platforms.map(({ platform }) => platform.name)}</Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;
