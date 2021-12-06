import { Cities, CityData as City } from "../../models/cityData";
import { WeatherData } from "../../models/weatherData";
import { SearchType } from "../action-types/searchTypes";

type Common = {
  loading: boolean;
  error: string | null;
};
type CityData = {
  data: WeatherData | null;
  status: Common;
};
export type WeatherState = {
  brisbane?: CityData;
  sydney?: CityData;
  goldCoast?: CityData;
  canberra?: CityData;
  melbourne?: CityData;
};

export interface FetchWeatherData {
  type: SearchType.FETCH_WEATHER_DATA;
}
export interface FetchWeatherDataSuccess {
  type: SearchType.FETCH_WEATHER_DATA_SUCCESS;
  payload: FetchWeatherDataSuccessPayload;
}

export interface FetchWeatherDataFailure {
  type: SearchType.FETCH_WEATHER_DATA_FAILURE;
  payload: FetchWeatherDataFailurePayload;
}
export interface FetchCityWeatherData {
  type: SearchType.FETCH_CITY_WEATHER_DATA;
  payload: City;
}

type CityWeather<K extends Cities, T> = {
  [P in K]?: T;
};

export type CityWeatherData = CityWeather<Cities, WeatherData>;

export interface FetchWeatherDataSuccessPayload {
  weatherData: WeatherData;
}
export interface FetchWeatherDataFailurePayload {
  error: string;
}
export type SearchWeatherAction =
  | FetchWeatherData
  | FetchWeatherDataSuccess
  | FetchWeatherDataFailure
  | FetchCityWeatherData;
