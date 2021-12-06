import React from "react";
import styled from "styled-components";
import { getRoundedValue } from "../../models/weatherData";
import { designVariables } from "../../styles/globalVariables";
export interface TileProps {
  title: string;
  icon: string;
  footer: string;
}
export const ShortTile = (props: TileProps) => {
  return (
    <StyledTile>
      <div className="title">{props.title}</div>
      <div className="image">
        <img src={props.icon} alt="" className="icon" />
      </div>
      <div className="footer">{getRoundedValue(+props.footer)}</div>
    </StyledTile>
  );
};

const StyledTile = styled.div`
  max-width: 8rem;
  height: 12rem;
  background-color: transparent;
  border: 2px solid ${designVariables.palette.light100};
  border-radius: 1rem;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  margin: 1rem 0.5rem;
  justify-content: space-around;
  align-items: center;
  .title {
    height: 1rem;
    width: 100%;
    position: relative;
    font-size: 1rem;
    font-weight: 300;
    color: ${designVariables.colorTextPrimary};
    text-transform: uppercase;
  }
  .footer {
    height: 1rem;
    width: 100%;
    position: relative;
    font-size: 1rem;
    font-weight: 300;
    color: ${designVariables.colorTextPrimary};
    text-transform: uppercase;
    &:after {
      content: "\xB0";
      top: 0;
      left: 0;
    }
  }
  image {
    width: 5rem;
    height: 5rem;
  }
  icon {
    width: 100%;
    height: 100%;
  }
`;
