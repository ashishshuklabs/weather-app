import styled from "styled-components";
import { MelbourneCard } from "../../layout/card/MelbourneCard";
import { BrisbaneCard } from "../../layout/card/BrisbaneCard";
import { SydneyCard } from "../../layout/card/SydneyCard";
import { CanberraCard } from "../../layout/card/CanberraCard";
import { GoldCoastCard } from "../../layout/card/GoldCoastCard";
import { Header } from "../../layout/header/Header";
import { OutlinedButton } from "../../components/form/button/OutlinedButton";
import { useDispatch } from "react-redux";
import { fetchCityWeatherData } from "../../state/action-creators/searchWeatherActionCreators";
import { cityData } from "../../models/cityData";
export const Landing = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchCityWeatherData(cityData.melbourne));
    dispatch(fetchCityWeatherData(cityData.brisbane));
    dispatch(fetchCityWeatherData(cityData.sydney));
    dispatch(fetchCityWeatherData(cityData.canberra));
    dispatch(fetchCityWeatherData(cityData.goldCoast));
  };
  return (
    <LandingWrapper>
      <Header />
      <div className="button-wrapper">
        <OutlinedButton
          color="transparent"
          hoverColor="#4a4a4a"
          title="refresh data"
          onClick={handleClick}
        />
      </div>
      <div className="cards-container">
        <MelbourneCard />
        <BrisbaneCard />
        <SydneyCard />
        <GoldCoastCard />
        <CanberraCard />
      </div>
    </LandingWrapper>
  );
};

const LandingWrapper = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(to bottom, #333, #707070);
  display: flex;
  flex-direction: column;
  .button-wrapper {
    max-width: 10rem;
    align-self: center;
    margin: 2rem 0;
  }
  .cards-container {
    display: flex;
    flex-direction: column;
  }
`;
