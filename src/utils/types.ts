export interface weatherDetailsType {
  coord: {
    lon: number;
    lat: number;
  };
  weather: weatherType[];
  base: string;
  main: mainType;
  visibility: 10000;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
interface weatherType {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface mainType {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
