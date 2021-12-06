import React from "react";
import styled from "styled-components";
import { designVariables } from "../../styles/globalVariables";

export const Header = () => {
  return (
    <StyledHeader>
      <h1 className="title">the weather app</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  max-width: 100%;
  background: transparent;
  color: ${designVariables.colorBodyText};
  height: 6rem;
  text-align: center;
  margin: 2rem;
  border-bottom: 1px solid ${designVariables.colorBodyText};
  @media (max-width: 570px) {
    .title {
      font-size: 2rem;
    }
    height: 4rem;
  }
`;
