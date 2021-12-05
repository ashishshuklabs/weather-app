import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchCityWeatherData } from "../../state/action-creators/searchWeatherActionCreators";
import { RootState } from "../../state/reducers/rootReducer";
import { cityData } from "../../models/cityData";
import { getFormattedDate } from "../../models/weatherData";
import { CardTemplate } from "../../layout";
export const Landing = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCityWeatherData(cityData.canberra));
  }, []);
  const data = useSelector((state: RootState) => {
    return state.fetchWeatherData;
  });

  console.log(
    data.weatherData && getFormattedDate(data.weatherData.daily[7].dt)
  );
  console.log(data.weatherData);
  return (
    <LandingWrapper>
      {data.weatherData ? (
        <CardTemplate
          city={cityData.melbourne.name}
          weatherData={data.weatherData}
        />
      ) : (
        <div>Loading......</div>
      )}
    </LandingWrapper>
  );
};

const LandingWrapper = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(to bottom, #333, #707070);
`;
