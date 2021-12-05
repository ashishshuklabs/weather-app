import React from "react";
import styled from "styled-components";
import { designVariables } from "../../../styles/globalVariables";
import { ColorTypes } from "../../../types/sharedTypes";

type ColorType = ColorTypes | "transparent";
interface ButtonProps {
  color: ColorType;
  hoverColor: string;
  title: string;
  buttonStyle?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
  rounded?: boolean;
}
export const OutlinedButton = (props: ButtonProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (props.onClick) {
      props.onClick(e);
    }
  };
  return (
    <StyledButton
      rounded={props.rounded || true}
      onClick={handleClick}
      buttonStyle={props.buttonStyle}
      color={props.color}
      hoverColor={props.hoverColor}
    >
      {props.title}
    </StyledButton>
  );
};
type StyledButtonProps = Omit<ButtonProps, "title" | "onClick">;
const StyledButton = styled.button<StyledButtonProps>`
  transition: ${designVariables.transition};
  cursor: pointer;
  color: ${designVariables.colorTextPrimary};
  padding: 0.5rem 0.65rem;
  text-transform: uppercase;
  border-radius: ${(props) => (props.rounded ? "0.5rem" : "0")};
  font-weight: 700;
  border: 1px solid ${designVariables.colorTextPrimary};
  ${(props) =>
    props.color === "primary"
      ? { background: designVariables.palette.dark900 }
      : props.color === "secondary"
      ? { background: designVariables.palette.lightGreen100 }
      : props.color === "tertiary"
      ? { background: designVariables.palette.red200 }
      : { background: "transparent" }}
  width: 100%;
  ${(props) => props.buttonStyle && { ...props.buttonStyle }}

  &:hover {
    ${(props) => props.hoverColor && { background: props.hoverColor }};
  }
  @media (max-width: 991px) {
    align-self: flex-start;
  }
`;
