import React, { MouseEvent } from "react";
import styled from "styled-components";
import { designVariables } from "../../../styles/globalVariables";
interface ButtonProps {
  color: string;
  hoverColor: string;
  title: string;
  buttonStyle?: React.CSSProperties;
  withIcon: boolean;
  svgIcon?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}
export const TextButton = (props: ButtonProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (props.onClick) {
      props.onClick(e);
    }
  };
  return (
    <StyledButton
      buttonStyle={props.buttonStyle}
      color={props.color}
      withIcon={props.withIcon}
      hoverColor={props.hoverColor}
    >
      <a onClick={handleClick} href="#">
        {props.title}
      </a>
      {props.svgIcon}
    </StyledButton>
  );
};
type StyledButtonProps = Omit<ButtonProps, "title" | "svgIcon" | "onClick">;
const StyledButton = styled.div<StyledButtonProps>`
  display: flex;
  a {
    transition: ${designVariables.transition};
    color: ${(props) =>
      props.color ? props.color : designVariables.colorBodyText};
    margin: 0 .5rem;
    ${(props) => (props.withIcon ? { paddingRight: ".75rem" } : "")}
    font-weight: 600;
    line-height: 1.2;
    font-size: 0.87rem;
    text-transform: capitalize;
  }
  ${(props) => props.buttonStyle && { ...props.buttonStyle }};
  svg {
    transition: var(--ds-transition);

    ${(props) =>
      props.withIcon
        ? {
            fill: props.hoverColor,
          }
        : designVariables.colorBodyText}
  }
  &:hover > a {
    color: ${(props) =>
      props.hoverColor ? props.hoverColor : designVariables.colorBodyText};
  }
  &:hover > svg {
    fill: ${(props) =>
      props.hoverColor ? props.hoverColor : designVariables.colorBodyText};
  }
  /* @media (max-width: 991px) {
    align-self: flex-start;
  } */
`;
