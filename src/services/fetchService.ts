import axios, { AxiosRequestConfig } from "axios";
import { CityData } from "../models/cityData";
import { WeatherData } from "../models/weatherData";
const config = () => {
  return {
    baseUrl: "https://api.openweathermap.org/data/2.5",
    apiKey: "f65f9ac44b09574be22f44d21ce49c58",
  };
};
export const fetchWeatherData = async () => {};
export const fetchCityWeatherService = async (coord: CityData) => {
  const configs: AxiosRequestConfig = {
    params: {
      appid: config().apiKey,
      units: "metric",
      lat: coord.latitude,
      lon: coord.longitude,
      exclude: "minutely",
    },
  };

  const response = await axios.get<WeatherData>(
    `${config().baseUrl}/onecall`,
    configs
  );
  return response.data;
};
