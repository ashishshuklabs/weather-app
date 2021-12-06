import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardTemplate } from "..";
import { cityData } from "../../models/cityData";
import { getFormattedDate } from "../../models/weatherData";
import { fetchCityWeatherData } from "../../state/action-creators/searchWeatherActionCreators";
import { RootState } from "../../state/reducers/rootReducer";
import { useInView } from "react-intersection-observer";
export const CanberraCard = () => {
  const { ref, inView } = useInView();
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log("fired from Canberra");

    // if (inView) {
    dispatch(fetchCityWeatherData(cityData.canberra));
    // }
  }, []);
  const data = useSelector((state: RootState) => {
    return state.fetchWeatherData;
  });
  return data.canberra?.status.loading ? (
    <div>Loading......</div>
  ) : (
    <div className="container" ref={ref}>
      {data.canberra && data.canberra?.data ? (
        <CardTemplate
          city={cityData.canberra.name}
          weatherData={data.canberra.data}
        />
      ) : (
        <div>Please wait...</div>
      )}
    </div>
  );
};
