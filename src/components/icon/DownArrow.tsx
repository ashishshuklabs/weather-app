import React from "react";
import styled from "styled-components";
import { ColorTypes } from "../../types/sharedTypes";
interface DownArrowProps {
  color: ColorTypes;
  style?: React.CSSProperties;
}
//Just a basic icon, does no side-effects
export const DownArrow = (props: DownArrowProps) => {
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
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height={props.style?.height ?? "24px"}
      viewBox="0 0 24 24"
      width={props.style?.width ?? "24px"}
      fill={
        props.color === "primary"
          ? colors.primary
          : props.color === "secondary"
          ? colors.secondary
          : colors.tertiary
      }
      style={{ ...props.style }}
    >
      <rect
        fill="none"
        height={props.style?.height ?? "24px"}
        width={props.style?.width ?? "24px"}
      />
      <path d="M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z" />
    </Wrapper>
  );
};

const Wrapper = styled.svg`
  cursor: pointer;
`;
