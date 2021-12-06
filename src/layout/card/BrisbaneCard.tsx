import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardTemplate } from "..";
import { cityData } from "../../models/cityData";
import { getFormattedDate } from "../../models/weatherData";
import { fetchCityWeatherData } from "../../state/action-creators/searchWeatherActionCreators";
import { RootState } from "../../state/reducers/rootReducer";
export const BrisbaneCard = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCityWeatherData(cityData.brisbane));
  }, []);
  const data = useSelector((state: RootState) => {
    return state.fetchWeatherData;
  });
  return (
    <div className="container">
      {data.brisbane && data.brisbane.data ? (
        <CardTemplate
          city={cityData.brisbane.name}
          weatherData={data.brisbane.data}
        />
      ) : (
        <div></div>
      )}
      ;
    </div>
  );
};
