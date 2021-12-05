import { all, fork } from "redux-saga/effects";
import {
  watchFetchCityWeatherData,
  watchFetchWeatherData,
} from "./searchSagas/searchSagas";
export function* rootSaga() {
  yield all([fork(watchFetchCityWeatherData), fork(watchFetchWeatherData)]);
}
