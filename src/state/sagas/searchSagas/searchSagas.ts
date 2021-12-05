import axios from "axios";
import { take, call, put, takeLatest } from "redux-saga/effects";
import { WeatherData } from "../../../models/weatherData";
import { fetchCityWeatherService } from "../../../services/fetchService";
import {
  fetchWeatherDataFailure,
  fetchWeatherDataSuccess,
} from "../../action-creators/searchWeatherActionCreators";
import { SearchType } from "../../action-types/searchTypes";
import { FetchCityWeatherData } from "../../types/searchWeatherType";
function* fetchWeatherData() {}

export function* watchFetchWeatherData() {
  yield takeLatest(SearchType.FETCH_WEATHER_DATA, fetchWeatherData);
}
function* fetchCityWeatherData(action: FetchCityWeatherData) {
  try {
    const data: WeatherData = yield call(
      fetchCityWeatherService,
      action.payload
    );

    if (
      action.payload.longitude.includes(data.lon.toString().split(".")[0]) &&
      action.payload.latitude.includes(data.lat.toString().split(".")[0])
    ) {
      yield put(fetchWeatherDataSuccess({ weatherData: data }));
    }
  } catch (error) {
    yield put(
      fetchWeatherDataFailure({
        error: axios.isAxiosError(error)
          ? error.message
          : "Unknown error occured.",
      })
    );
  }
}

export function* watchFetchCityWeatherData() {
  yield takeLatest(SearchType.FETCH_CITY_WEATHER_DATA, fetchCityWeatherData);
}
