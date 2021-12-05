import {
  SearchWeatherAction,
  WeatherDataState,
} from "../../types/searchWeatherType";
import { SearchType } from "../../action-types/searchTypes";

const initialState: WeatherDataState = {
  weatherData: null,
  error: null,
  loading: false,
};

export const SearchReducer = (
  state = initialState,
  action: SearchWeatherAction
): WeatherDataState => {
  switch (action.type) {
    case SearchType.FETCH_WEATHER_DATA:
      return {
        loading: true,
        weatherData: null,
        error: null,
      };
    case SearchType.FETCH_WEATHER_DATA_SUCCESS:
      return {
        loading: false,
        weatherData: action.payload.weatherData,
        error: null,
      };
    case SearchType.FETCH_WEATHER_DATA_FAILURE:
      return {
        loading: false,
        weatherData: null,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
