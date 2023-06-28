import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface Platform {
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

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  return { games, error, isLoading };
};

export default useGames;
