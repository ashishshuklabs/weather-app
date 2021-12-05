import React from "react";
import styled from "styled-components";
import { designVariables } from "../../styles/globalVariables";
import { OutlinedButton } from "../form/button/OutlinedButton";
export interface TileProps {
  title: string;
  bodyText: string;
}
export const TileTemplate = (props: TileProps) => {
  return (
    <StyledTile title={props.title}>
      <div className="title">{props.title}</div>
      <p className="text">{props.bodyText}</p>
      <OutlinedButton
        color="transparent"
        hoverColor={designVariables.palette.red200}
        buttonStyle={{ width: "10rem" }}
        title="read more"
      />
    </StyledTile>
  );
};

const StyledTile = styled.div<Omit<TileProps, "bodyText" | "title">>`
  max-width: 22rem;
  height: 21rem;
  background-color: ${designVariables.colorTileBg};
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  margin: 0 1rem;
  justify-content: space-evenly;
  .title {
    height: 6rem;
    width: 100%;
    position: relative;
    margin-bottom: 0.6rem;
    font-size: 2.15rem;
    display: inline-block;
    font-weight: 300;
    color: ${designVariables.colorTextPrimary};
    text-transform: capitalize;
    white-space: nowrap;
    &::before {
      content: "About";
      color: ${designVariables.colorTextPrimary};
      font-size: 1rem;
      display: block;
      padding-top: 1rem;
      font-weight: 400;
      text-transform: uppercase;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 100%;
      height: 2px;
      background-color: ${designVariables.colorTextPrimary};
      transform: translateX(-50%);
    }
  }
  .text {
    /* text-overflow: ellipsis; */
    text-align: justify;
    overflow: hidden;
    width: 100%;
    max-height: 10rem;
    margin-bottom: 1rem;
    color: ${designVariables.colorTextPrimary};
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  button {
    margin-bottom: 2rem;
  }
`;
