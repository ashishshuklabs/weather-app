import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardTemplate } from "..";
import { cityData } from "../../models/cityData";
import { getFormattedDate } from "../../models/weatherData";
import { fetchCityWeatherData } from "../../state/action-creators/searchWeatherActionCreators";
import { RootState } from "../../state/reducers/rootReducer";
export const CanberraCard = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCityWeatherData(cityData.canberra));
  }, []);
  const data = useSelector((state: RootState) => {
    return state.fetchWeatherData;
  });
  return (
    <div className="container">
      {data.canberra && data.canberra?.data ? (
        <CardTemplate
          city={cityData.canberra.name}
          weatherData={data.canberra.data}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};
