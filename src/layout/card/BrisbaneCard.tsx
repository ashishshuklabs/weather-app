import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardTemplate } from "..";
import { cityData } from "../../models/cityData";
import { getFormattedDate } from "../../models/weatherData";
import { fetchCityWeatherData } from "../../state/action-creators/searchWeatherActionCreators";
import { RootState } from "../../state/reducers/rootReducer";
import { useInView } from "react-intersection-observer";
export const BrisbaneCard = () => {
  const { ref, inView } = useInView();
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log("fired from brisbane");

    // if (inView) {
    dispatch(fetchCityWeatherData(cityData.brisbane));
    // }
  }, []);
  const data = useSelector((state: RootState) => {
    return state.fetchWeatherData;
  });
  return data.brisbane?.status.loading ? (
    <div>Loading......</div>
  ) : (
    <div className="container" ref={ref}>
      {data.brisbane && data.brisbane.data ? (
        <CardTemplate
          city={cityData.brisbane.name}
          weatherData={data.brisbane.data}
        />
      ) : (
        <div>Please wait...</div>
      )}
      ;
    </div>
  );
};
