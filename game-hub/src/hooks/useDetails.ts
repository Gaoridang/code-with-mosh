import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Movie } from "./useMovies";

interface Genre {
  id: number;
  name: string;
}

export interface MovieDetail extends Movie {
  overview: string;
  popularity: number;
  genres: Genre[];
}

const useDetails = (id: number) => {
  const [details, setDetails] = useState<MovieDetail>();
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<MovieDetail>(`${id}`, { signal: controller.signal })
      .then((res) => {
        console.log("fetch succeeded");
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { details, error };
};

export default useDetails;
