
"use client";

import { useEffect, useState } from "react";
import type { WeatherData } from "@/types/weather";

export function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Géolocalisation non supportée");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position: GeolocationPosition) => {
        try {
          const { latitude, longitude } = position.coords;

          const response = await fetch(
            `/api/weather?lat=${latitude}&lon=${longitude}`
          );

          if (!response.ok) {
            throw new Error("Impossible de récupérer la météo");
          }

          const data: WeatherData = await response.json();

          setWeather(data);
        } catch (err) {
          setError(
            err instanceof Error ? err.message : "Erreur inconnue"
          );
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Autorisation de localisation refusée");
        setLoading(false);
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  }, []);

  return { weather, loading, error };
}
