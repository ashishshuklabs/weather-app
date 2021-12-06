import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardTemplate } from "..";
import { cityData } from "../../models/cityData";
import { fetchCityWeatherData } from "../../state/action-creators/searchWeatherActionCreators";
import { RootState } from "../../state/reducers/rootReducer";
export const GoldCoastCard = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCityWeatherData(cityData.goldCoast));
  }, []);
  const data = useSelector((state: RootState) => {
    return state.fetchWeatherData;
  });
  return (
    <div className="container">
      {data.goldCoast && data.goldCoast.data ? (
        <CardTemplate
          city={cityData.goldCoast.displayName}
          weatherData={data.goldCoast.data}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};
