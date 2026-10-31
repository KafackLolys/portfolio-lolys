
"use client";

import { useEffect, useState } from "react";
import type { WeatherData } from "@/types/weather";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import { getCountryName } from "@/lib/get-country-name";

interface weatherResponseApi {
  location: string;
  countryCode: string;
  state: string;
  temperature: number;
  description: string;
  humidity: number;
  wind: number;
}

export function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const t = useScopedI18n("weatherApi.hook");

  const locale = useCurrentLocale();

  useEffect(() => {
    if (!navigator.geolocation) {
      setError(t("geolocation_unsupported"));
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position: GeolocationPosition) => {
        try {
          const { latitude, longitude } = position.coords;

          const response = await fetch(
            `/api/weather?lat=${latitude}&lon=${longitude}&lang=${locale}`
          );

          if (!response.ok) {
            throw new Error(t("weather_fetch_failed"));
          }

          const data: weatherResponseApi = await response.json();
          
          const country = getCountryName(data.countryCode, locale);

          setWeather({
            ...data,
            countryName: country,
          });
        } catch (err) {
          setError(
            err instanceof Error ? err.message : t("unknown_error")
          );
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError(t("location_permission_denied"));
        setLoading(false);
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  }, []);
  // console.log("weather: ", weather);

  return { weather, loading, error };
}
