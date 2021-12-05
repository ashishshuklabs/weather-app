import { CityData } from "../../models/cityData";
import { SearchType } from "../action-types/searchTypes";
import {
  FetchCityWeatherData,
  FetchWeatherData,
  FetchWeatherDataFailure,
  FetchWeatherDataFailurePayload,
  FetchWeatherDataSuccess,
  FetchWeatherDataSuccessPayload,
} from "../types/searchWeatherType";
//Actions returning POJO
export const fetchWeatherData = (): FetchWeatherData => ({
  type: SearchType.FETCH_WEATHER_DATA,
});
export const fetchCityWeatherData = (
  coord:CityData
): FetchCityWeatherData => ({
  type: SearchType.FETCH_CITY_WEATHER_DATA,
  payload: coord,
});
export const fetchWeatherDataSuccess = (
  payload: FetchWeatherDataSuccessPayload
): FetchWeatherDataSuccess => ({
  type: SearchType.FETCH_WEATHER_DATA_SUCCESS,
  payload,
});

export const fetchWeatherDataFailure = (
  payload: FetchWeatherDataFailurePayload
): FetchWeatherDataFailure => ({
  type: SearchType.FETCH_WEATHER_DATA_FAILURE,
  payload,
});
