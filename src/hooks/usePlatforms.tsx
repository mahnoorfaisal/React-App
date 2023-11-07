import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Platform {
  id: number;
  name: string;
  image_background: string;
}

interface FetchPlatformsResponse {
  count: number;
  results: Platform[];
}
const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchPlatformsResponse>("/platforms/lists/parents", { signal: controller.signal })
      .then((res) => {
        setPlatforms(res?.data?.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { platforms, errors, isLoading };
};

export default usePlatforms;
