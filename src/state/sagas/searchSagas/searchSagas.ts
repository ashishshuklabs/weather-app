import axios from "axios";
import { take, call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { Cities } from "../../../models/cityData";
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
const getData = (actionType: Cities, data: WeatherData) => {
  switch (actionType) {
    case "brisbane":
      return {
        brisbane: data,
      };
    case "canberra":
      return {
        canberra: data,
      };
    case "goldCoast":
      return {
        goldCoast: data,
      };
    case "melbourne":
      return {
        melbourne: data,
      };
    case "sydney":
      return {
        sydney: data,
      };
  }
};
function* fetchCityWeatherData(action: FetchCityWeatherData) {
  try {
    const data: WeatherData = yield call(
      fetchCityWeatherService,
      action.payload
    );

    yield put(
      fetchWeatherDataSuccess({
        weatherData: data,
      })
    );
  } catch (error) {
    yield put(
      fetchWeatherDataFailure({
        error: axios.isAxiosError(error)
          ? error.message + ` Error fetching ${action.payload.name}`
          : `Unknown error occured while fetching data for ${action.payload.name}`,
      })
    );
  }
}

export function* watchFetchCityWeatherData() {
  yield takeEvery(SearchType.FETCH_CITY_WEATHER_DATA, fetchCityWeatherData);
}
