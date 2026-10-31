
import { NextRequest, NextResponse } from "next/server";
import enDict from "@/locales/en";
import frDict from "@/locales/fr";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const lat = Number(searchParams.get("lat"));
  const lon = Number(searchParams.get("lon"));
  const lang = searchParams.get("lang") || "fr";
  const dict = lang === "fr" ? frDict.weatherApi.errorsApi : enDict.weatherApi.errorsApi;

  if (
    !Number.isFinite(lat) ||
    !Number.isFinite(lon) ||
    lat < -90 ||
    lat > 90 ||
    lon < -180 ||
    lon > 180
  ) {
    return NextResponse.json(
      { error: dict.invalid_coordinates },
      { status: 400 }
    );
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: dict.missing_api_key },
      { status: 500 }
    );
  }

  try {
    // Weather API
    const weatherUrl = new URL(
      "https://api.openweathermap.org/data/2.5/weather"
    );

    weatherUrl.searchParams.set("lat", String(lat));
    weatherUrl.searchParams.set("lon", String(lon));
    weatherUrl.searchParams.set("appid", apiKey);
    weatherUrl.searchParams.set("units", "metric");
    weatherUrl.searchParams.set("lang", lang);

    // Reverse Geocoding API
    const geoUrl = new URL(
      "https://api.openweathermap.org/geo/1.0/reverse"
    );

    geoUrl.searchParams.set("lat", String(lat));
    geoUrl.searchParams.set("lon", String(lon));
    geoUrl.searchParams.set("limit", "5");
    geoUrl.searchParams.set("appid", apiKey);

    const [weatherResponse, geoResponse] = await Promise.all([
      fetch(weatherUrl.toString()),
      fetch(geoUrl.toString()),
    ]);

    if (!weatherResponse.ok || !geoResponse.ok) {
      return NextResponse.json(
        { error: dict.weather_fetch_failed },
        { status: 502 }
      );
    }

    const weatherData = await weatherResponse.json();
    const geoData = await geoResponse.json();
    // console.log("weatherData: ", weatherData);
    // console.log("geoData: ", geoData);

    const location = geoData[0];

    return NextResponse.json({
      location: location?.local_names?.[lang] || location?.name || weatherData.name,
      countryCode: location?.country || weatherData.sys.country,
      state: location?.state || null,
      temperature: weatherData.main.temp,
      description: weatherData.weather[0].description,
      humidity: weatherData.main.humidity,
      wind: weatherData.wind.speed,
    });

  } catch {
    return NextResponse.json(
      { error: dict.server_error },
      { status: 500 }
    );
  }
}
