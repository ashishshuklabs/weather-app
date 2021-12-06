import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardTemplate } from "..";
import { cityData } from "../../models/cityData";
import { getFormattedDate } from "../../models/weatherData";
import { fetchCityWeatherData } from "../../state/action-creators/searchWeatherActionCreators";
import { RootState } from "../../state/reducers/rootReducer";
import { useInView } from "react-intersection-observer";
export const SydneyCard = () => {
  const { ref, inView } = useInView();
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log("fired from sydney");

    // if (inView) {
      dispatch(fetchCityWeatherData(cityData.sydney));
    // }
  }, []);
  const data = useSelector((state: RootState) => {
    return state.fetchWeatherData;
  });

  return data.sydney?.status.loading ? (
    <div>Loading......</div>
  ) : (
    <div className="container" ref={ref}>
      {data.sydney && data.sydney?.data ? (
        <CardTemplate
          city={cityData.sydney.displayName}
          weatherData={data.sydney.data}
        />
      ) : (
        <div>Please wait...</div>
      )}
    </div>
  );
};
