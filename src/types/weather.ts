export interface WeatherData {
  location: string;
  countryCode: string;
  countryName: string;
  state: string;
  temperature: number;
  description: string;
  humidity: number;
  wind: number;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}