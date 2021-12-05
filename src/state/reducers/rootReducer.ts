import { combineReducers } from "redux";
import { SearchReducer } from "./searchReducer/searchReducer";
//Create root reducer
export const rootReducer = combineReducers({
  fetchWeatherData: SearchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
