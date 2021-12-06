import styled from "styled-components";
import { MelbourneCard } from "../../layout/card/MelbourneCard";
import { BrisbaneCard } from "../../layout/card/BrisbaneCard";
import { SydneyCard } from "../../layout/card/SydneyCard";
import { CanberraCard } from "../../layout/card/CanberraCard";
import { GoldCoastCard } from "../../layout/card/GoldCoastCard";
export const Landing = () => {
  return (
    <LandingWrapper>
      <MelbourneCard />
      <BrisbaneCard />
      <SydneyCard />
      <GoldCoastCard />

      <CanberraCard />
    </LandingWrapper>
  );
};

const LandingWrapper = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #333, #707070);
`;
