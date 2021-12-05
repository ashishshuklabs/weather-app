import React from "react";
import styled from "styled-components";
import { ColorTypes } from "../../types/sharedTypes";
interface RightArrowProps {
  color: ColorTypes;
  style?: React.CSSProperties;
}
//Just a basic icon, does no side-effects
export const RightArrow = (props: RightArrowProps) => {
  const colors = {
    primary: getComputedStyle(document.body).getPropertyValue(
      "--ds-button-color-primary"
    ),
    secondary: getComputedStyle(document.body).getPropertyValue(
      "--ds-button-color-secondary"
    ),
    tertiary: getComputedStyle(document.body).getPropertyValue(
      "--ds-button-color-tertiary"
    ),
  };
  return (
    <Wrapper
      width={props.style?.width}
      height={props.style?.height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={
        props.color === "primary"
          ? colors.primary
          : props.color === "secondary"
          ? colors.secondary
          : colors.tertiary
      }
      style={{ ...props.style }}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M22 12l-4-4v3H3v2h15v3l4-4z" />
    </Wrapper>
  );
};

const Wrapper = styled.svg`
  cursor: pointer;
`;
