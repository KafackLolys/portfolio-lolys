"use client";

import { useWeather } from "@/hooks/use-weather";
import { useScopedI18n } from "@/locales/client";
import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Droplets,
  MapPin,
  RefreshCw,
  Sun,
  Thermometer,
  Wind,
} from "lucide-react";

function getWeatherIcon(description: string) {
  const text = description.toLowerCase();

  if (
    text.includes("orage") ||
    text.includes("thunder") ||
    text.includes("storm")
  ) {
    return CloudLightning;
  }

  if (text.includes("neige") || text.includes("snow")) {
    return CloudSnow;
  }

  if (
    text.includes("pluie") ||
    text.includes("rain") ||
    text.includes("drizzle") ||
    text.includes("averse")
  ) {
    return CloudRain;
  }

  if (
    text.includes("brouillard") ||
    text.includes("fog") ||
    text.includes("brume") ||
    text.includes("mist")
  ) {
    return CloudFog;
  }

  if (
    text.includes("nuage") ||
    text.includes("cloud") ||
    text.includes("couvert") ||
    text.includes("overcast")
  ) {
    return Cloud;
  }

  return Sun;
}

function WeatherLoading() {
  return (
    <main className="min-h-screen bg-[#07111f] px-4 py-12 text-white">
      <div className="mx-auto max-w-5xl animate-pulse space-y-6">
        <div className="h-8 w-48 rounded-lg bg-white/10" />
        <div className="h-72 rounded-[2rem] bg-white/5" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="h-32 rounded-3xl bg-white/5" />
          <div className="h-32 rounded-3xl bg-white/5" />
        </div>
      </div>
    </main>
  );
}

function WeatherError({
  title,
  message,
  buttonText,
}: {
  title: string;
  message: string;
  buttonText: string;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07111f] px-4 text-white">
      <div className="w-full max-w-md rounded-3xl border border-red-400/20 bg-white/[0.04] p-8 text-center backdrop-blur-xl">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10">
          <CloudLightning className="h-8 w-8 text-red-400" />
        </div>

        <h2 className="mb-3 text-xl font-semibold">{title}</h2>

        <p className="text-sm leading-6 text-slate-400">{message}</p>

        <button
          onClick={() => window.location.reload()}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
        >
          <RefreshCw className="h-4 w-4" />
          {buttonText}
        </button>
      </div>
    </main>
  );
}

export default function WeatherReportPage() {
  const t = useScopedI18n("weatherReport");
  const { weather, loading, error } = useWeather();

  if (loading) {
    return <WeatherLoading />;
  }

  if (error) {
    return (
      <WeatherError
        title={t("error.title")}
        message={error}
        buttonText={t("error.retry")}
      />
    );
  }

  if (!weather) {
    return null;
  }

  const WeatherIcon = getWeatherIcon(weather.description || "");

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07111f] px-4 py-10 text-white sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-sky-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />
              {t("header.label")}
            </div>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {t("header.title")}
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              {t("header.subtitle")}
            </p>
          </div>

          <div className="hidden rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:block">
            <Cloud className="h-6 w-6 text-sky-400" />
          </div>
        </header>

        {/* Main weather card */}
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#172d46] via-[#102238] to-[#0b1729] p-6 shadow-2xl shadow-black/20 sm:p-10">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sky-400/10 blur-[80px]" />

          <div className="relative z-10 flex flex-col justify-between gap-10 md:flex-row md:items-center">
            {/* City and temperature */}
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                <MapPin className="h-4 w-4 text-sky-400" />
                <span>
                  {weather.countryName && `${weather.countryName}, `}{" "}
                  {weather.state && `${weather.state}, `}{" "}
                  {weather.location && `${weather.location}`}
                </span>
              </div>

              <div className="flex items-start">
                <span className="text-7xl font-extralight tracking-tighter sm:text-8xl">
                  {Math.round(weather.temperature)}
                </span>

                <span className="mt-2 text-3xl font-light text-sky-300">
                  °C
                </span>
              </div>

              <p className="mt-4 text-lg font-medium capitalize text-slate-200">
                {weather.description}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                {t("weather.currentTemperature")}
              </p>
            </div>

            {/* Weather icon */}
            <div className="relative flex items-center justify-center">
              <div className="absolute h-48 w-48 rounded-full bg-sky-400/10 blur-3xl" />

              <div className="weather-icon-float relative flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] shadow-inner sm:h-52 sm:w-52">
                <WeatherIcon
                  className="h-28 w-28 text-sky-300 drop-shadow-[0_0_30px_rgba(125,211,252,0.25)] sm:h-36 sm:w-36"
                  strokeWidth={1.2}
                />
              </div>
            </div>
          </div>

          {/* Bottom information */}
          <div className="relative z-10 mt-10 border-t border-white/10 pt-6">
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Thermometer className="h-4 w-4 text-sky-400" />
                <span>{t("weather.currentConditions")}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>{t("weather.availableData")}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Weather details */}
        <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Humidity */}
          <div className="weather-card group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.05]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">
                  {t("details.humidity")}
                </p>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight">
                    {weather.humidity}
                  </span>

                  <span className="text-lg text-slate-400">%</span>
                </div>
              </div>

              <div className="rounded-2xl bg-sky-400/10 p-4 transition group-hover:bg-sky-400/20">
                <Droplets className="h-6 w-6 text-sky-400" />
              </div>
            </div>

            <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-300 transition-all duration-1000"
                style={{
                  width: `${Math.min(
                    100,
                    Math.max(0, Number(weather.humidity) || 0),
                  )}%`,
                }}
              />
            </div>

            <p className="mt-3 text-xs text-slate-500">
              {t("details.humidityDescription")}
            </p>
          </div>

          {/* Wind */}
          <div className="weather-card group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.05]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">
                  {t("details.windSpeed")}
                </p>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-tight">
                    {weather.wind}
                  </span>

                  <span className="text-sm text-slate-400">m/s</span>
                </div>
              </div>

              <div className="rounded-2xl bg-indigo-400/10 p-4 transition group-hover:bg-indigo-400/20">
                <Wind className="h-6 w-6 text-indigo-400" />
              </div>
            </div>

            <p className="mt-6 text-xs text-slate-500">
              {t("details.windDescription")}
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 text-center">
          <p className="text-xs text-slate-500">{t("footer")}</p>
        </footer>
      </div>
    </main>
  );
}
