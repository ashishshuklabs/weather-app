import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardTemplate } from "..";
import { cityData } from "../../models/cityData";
import { fetchCityWeatherData } from "../../state/action-creators/searchWeatherActionCreators";
import { RootState } from "../../state/reducers/rootReducer";
import { useInView } from "react-intersection-observer";
export const MelbourneCard = () => {
  const { ref, inView } = useInView();
  const dispatch = useDispatch();
  React.useEffect(() => {
    // console.log("fired from Melbourne");
    // if (inView) {
    dispatch(fetchCityWeatherData(cityData.melbourne));
    // }
  }, []);
  // React.useEffect(() => {
  //   // console.log("fired from Melbourne");
  //   if (inView) {
  //     dispatch(fetchCityWeatherData(cityData.melbourne));
  //   }
  // }, [inView]);
  const data = useSelector((state: RootState) => {
    return state.fetchWeatherData;
  });
  console.log(data);
  return data.melbourne?.status.loading ? (
    <div>Loading......</div>
  ) : (
    <div className="container" ref={ref}>
      {data.melbourne && data.melbourne.data ? (
        <CardTemplate
          city={cityData.melbourne.displayName}
          weatherData={data.melbourne.data}
        />
      ) : (
        <div>Please wait...</div>
      )}
    </div>
  );
};
