import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardTemplate } from "..";
import { cityData } from "../../models/cityData";
import { fetchCityWeatherData } from "../../state/action-creators/searchWeatherActionCreators";
import { RootState } from "../../state/reducers/rootReducer";
import { useInView } from "react-intersection-observer";
export const GoldCoastCard = () => {
  const { ref, inView } = useInView();
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log("fired from GC");

    // if (inView) {
      dispatch(fetchCityWeatherData(cityData.goldCoast));
    // }
  }, []);
  const data = useSelector((state: RootState) => {
    return state.fetchWeatherData;
  });
  return data.goldCoast?.status.loading ? (
    <div>Loading......</div>
  ) : (
    <div className="container" ref={ref}>
      {data.goldCoast && data.goldCoast.data ? (
        <CardTemplate
          city={cityData.goldCoast.displayName}
          weatherData={data.goldCoast.data}
        />
      ) : (
        <div>Please wait...</div>
      )}
    </div>
  );
};
