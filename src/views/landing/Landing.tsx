import styled from "styled-components";
import { MelbourneCard } from "../../layout/card/MelbourneCard";
import { BrisbaneCard } from "../../layout/card/BrisbaneCard";
import { SydneyCard } from "../../layout/card/SydneyCard";
import { CanberraCard } from "../../layout/card/CanberraCard";
import { GoldCoastCard } from "../../layout/card/GoldCoastCard";
import { Header } from "../../layout/header/Header";
export const Landing = () => {
  return (
    <LandingWrapper>
      <Header />
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
  .cards-container {
    display: flex;
    flex-direction: column;
  }
`;
