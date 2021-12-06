import {
  SearchWeatherAction,
  WeatherState,
} from "../../types/searchWeatherType";
import { SearchType } from "../../action-types/searchTypes";
import { Cities, getCity } from "../../../models/cityData";

const initialState: WeatherState = {
  brisbane: {
    data: null,
    status: {
      error: null,
      loading: false,
    },
  },
  sydney: {
    data: null,
    status: {
      error: null,
      loading: false,
    },
  },
  melbourne: {
    data: null,
    status: {
      error: null,
      loading: false,
    },
  },
  goldCoast: {
    data: null,
    status: {
      error: null,
      loading: false,
    },
  },
  canberra: {
    data: null,
    status: {
      error: null,
      loading: false,
    },
  },
};
export const SearchReducer = (
  state = initialState,
  action: SearchWeatherAction
): WeatherState => {
  switch (action.type) {
    case SearchType.FETCH_CITY_WEATHER_DATA:
    case SearchType.FETCH_WEATHER_DATA:
      return {
        brisbane: {
          ...state.brisbane,
          data: null,
          status: {
            loading: true,
            error: null,
          },
        },
        sydney: {
          ...state.sydney,
          data: null,
          status: {
            loading: true,
            error: null,
          },
        },
        melbourne: {
          ...state.melbourne,
          data: null,
          status: {
            loading: true,
            error: null,
          },
        },
        canberra: {
          ...state.canberra,
          data: null,
          status: {
            loading: true,
            error: null,
          },
        },
        goldCoast: {
          ...state.goldCoast,
          data: null,
          status: {
            loading: true,
            error: null,
          },
        },
      };
    case SearchType.FETCH_WEATHER_DATA_SUCCESS:
      const city: Cities | null = getCity(
        action.payload.weatherData.lat,
        action.payload.weatherData.lon
      );
      console.log(state, city);
      switch (city) {
        case "brisbane":
          return {
            ...state,
            brisbane: {
              data: action.payload.weatherData,
              status: {
                loading: false,
                error: null,
              },
            },
          };
        case "melbourne":
          return {
            ...state,
            melbourne: {
              data: action.payload.weatherData,
              status: {
                loading: false,
                error: null,
              },
            },
          };
        case "sydney":
          return {
            ...state,
            sydney: {
              data: action.payload.weatherData,
              status: {
                loading: false,
                error: null,
              },
            },
          };
        case "goldCoast":
          return {
            ...state,
            goldCoast: {
              data: action.payload.weatherData,
              status: {
                loading: false,
                error: null,
              },
            },
          };
        case "canberra":
          return {
            ...state,
            canberra: {
              data: action.payload.weatherData,
              status: {
                loading: false,
                error: null,
              },
            },
          };
        default:
          return state;
      }
    case SearchType.FETCH_WEATHER_DATA_FAILURE:
      const cityErr = getCityInErr(action.payload.error);
      const { error } = action.payload;
      switch (cityErr) {
        case "brisbane":
          return {
            ...state,
            brisbane: {
              data: null,
              status: {
                loading: false,
                error,
              },
            },
          };
        case "melbourne":
          return {
            ...state,
            melbourne: {
              data: null,
              status: {
                loading: false,
                error,
              },
            },
          };
        case "sydney":
          return {
            ...state,
            sydney: {
              data: null,
              status: {
                loading: false,
                error,
              },
            },
          };
        case "goldCoast":
          return {
            ...state,
            goldCoast: {
              data: null,
              status: {
                loading: false,
                error,
              },
            },
          };
        case "canberra":
          return {
            ...state,
            canberra: {
              data: null,
              status: {
                loading: false,
                error,
              },
            },
          };
        default:
          return state;
      }
    //this is the outer default
    default:
      return state;
  }
};

const getCityInErr = (error: string): Cities | null => {
  return error.includes("brisbane")
    ? "brisbane"
    : error.includes("melbourne")
    ? "melbourne"
    : error.includes("canberra")
    ? "canberra"
    : error.includes("goldCoast")
    ? "goldCoast"
    : error.includes("sydney")
    ? "sydney"
    : null;
};
