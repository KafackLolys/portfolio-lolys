
"use client";

import { useWeather } from "@/hooks/use-weather";


export default function WeatherReportPag() {
  const { weather, loading, error } = useWeather();

  if (loading) {
    return <p>Récupération de votre météo...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!weather) return null;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Météo à {weather.city}
      </h1>

      <h2 className="text-4xl font-bold">
        {weather.temperature}°C
      </h2>

      <p>{weather.description}</p>

      <p>Humidité : {weather.humidity}%</p>

      <p>Vent : {weather.wind} m/s</p>
    </div>
  );
}
