import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
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
  platforms: Platform[];
  rating: number;
}

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
