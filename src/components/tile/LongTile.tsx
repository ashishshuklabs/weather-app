import React from "react";
import styled from "styled-components";
import { getFormattedDate, getRoundedValue } from "../../models/weatherData";
import { designVariables } from "../../styles/globalVariables";
export interface TileProps {
  date: number;
  low: number;
  high: number;
  wind: number;
  rain: number;
  icon: string;
}
export const LongTile = (props: TileProps) => {
  const { date, icon, low, high, wind, rain } = props;
  return (
    <StyledTile>
      <div className="date">{getFormattedDate(+date)}</div>
      <div className="icon common">
        <img src={icon} alt="" className="icon" />
      </div>
      <div className="low common">
        <div className="temperature">{getRoundedValue(+low)}</div>
        <div className="text">low</div>
      </div>
      <div className="high common">
        <div className="temperature">{getRoundedValue(+high)}</div>
        <div className="text">high</div>
      </div>
      <div className="wind common">
        <div className="speed">{getRoundedValue(+wind)}</div>
        <div className="text">wind</div>
      </div>
      <div className="rain common">
        <div className="percentage">{getRoundedValue(+rain)}%</div>
        <div className="text">rain</div>
      </div>
    </StyledTile>
  );
};

const StyledTile = styled.div`
  max-width: 100%;
  height: 5rem;
  background-color: transparent;
  border: 2px solid ${designVariables.palette.light100};
  color: ${designVariables.palette.light100};
  text-align: center;
  display: flex;
  padding: 1rem 2rem;
  margin: 1rem 1rem;
  justify-content: space-between;
  align-items: center;
  .common{
    margin: auto .25rem;
  }
  icon {
    width: 100%;
    height: 100%;
  }
`;
