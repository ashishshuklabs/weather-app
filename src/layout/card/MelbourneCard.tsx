import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardTemplate } from "..";
import { cityData } from "../../models/cityData";
import { fetchCityWeatherData } from "../../state/action-creators/searchWeatherActionCreators";
import { RootState } from "../../state/reducers/rootReducer";
export const MelbourneCard = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCityWeatherData(cityData.melbourne));
  }, []);
  const data = useSelector((state: RootState) => {
    return state.fetchWeatherData;
  });
  return data.melbourne?.status.loading ? (
    <div style={{ color: "white", margin: "0 auto" }}>Loading......</div>
  ) : (
    <div className="container">
      {data.melbourne && data.melbourne.data ? (
        <CardTemplate
          city={cityData.melbourne.displayName}
          weatherData={data.melbourne.data}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};
