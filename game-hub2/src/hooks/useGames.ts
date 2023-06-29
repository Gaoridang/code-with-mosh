import { GameQuery } from "../App";
import useData from "./useData";

export interface ParentPlatform {
  platform: {
    id: number;
    slug: string;
    name: string;
  };
}

export interface Game {
  name: string;
  id: number;
  slug: string;
  background_image: string;
  platforms: ParentPlatform[];
  rating: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
