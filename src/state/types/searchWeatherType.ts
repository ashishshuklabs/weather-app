import { CityData } from "../../models/cityData";
import { WeatherData } from "../../models/weatherData";
import { SearchType } from "../action-types/searchTypes";

export interface WeatherDataState {
  loading: boolean;
  weatherData: null | WeatherData;
  error: string | null;
}
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
  payload: CityData;
}
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
  | FetchCityWeatherData
