import useData from "./useData";

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

const useGames = () => useData<Game>("/games");

export default useGames;
