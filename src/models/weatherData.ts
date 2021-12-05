export interface WeatherData {
  current: {
    dt: number;
    humidity: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    wind_speed: number;
    clouds: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
  };
  hourly: {
    dt: number;
    temp: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
  }[];
  daily: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: {
      day: number;
      min: number;
      max: number;
      night: number;
      eve: number;
      morn: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    wind_speed: number;
    clouds: number;
  }[];
  lat: number;
  lon: number;
}

export const getFormattedDate = (date: number): string => {
  return new Date(date * 1000).toDateString();
};

export const getFormattedTime = (date: number): string => {
  return new Date(date * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    hour12: true,
  });
};

export const getRoundedValue = (value: number): string => {
  return value.toFixed(0);
};
