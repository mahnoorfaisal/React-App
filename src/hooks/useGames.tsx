import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  metacritic:number
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState([]);
  const[isLoading, setLoading]= useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true)
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res?.data?.results);
         setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err);
         setLoading(false)
      });

    return () => controller.abort();
  }, []);

  return { games, errors, isLoading };
};

export default useGames;