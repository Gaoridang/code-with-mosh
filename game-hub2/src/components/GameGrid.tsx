import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}

      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </>
  );
};

export default GameGrid;
