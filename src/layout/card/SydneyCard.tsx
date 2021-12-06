import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardTemplate } from "..";
import { cityData } from "../../models/cityData";
import { getFormattedDate } from "../../models/weatherData";
import { fetchCityWeatherData } from "../../state/action-creators/searchWeatherActionCreators";
import { RootState } from "../../state/reducers/rootReducer";
export const SydneyCard = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCityWeatherData(cityData.sydney));
  }, []);
  const data = useSelector((state: RootState) => {
    return state.fetchWeatherData;
  });

  return (
    <div className="container">
      {data.sydney && data.sydney?.data ? (
        <CardTemplate
          city={cityData.sydney.displayName}
          weatherData={data.sydney.data}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};
