import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

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

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
