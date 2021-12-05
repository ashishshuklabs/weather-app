import { prependOnceListener } from "process";
import React from "react";
import styled from "styled-components";
import { designVariables } from "../../../styles/globalVariables";

export const Checkbox = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <StyledCheckbox style={style} tabIndex={5}>
      <input type="checkbox" className="checkbox" />
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.div<{ style?: React.CSSProperties }>`
  position: relative;
  cursor: pointer;
  min-width: 2.5rem;
  height: 2.5rem;
  border: 2px solid ${designVariables.colorTextPrimary};
  transition: all 0.2s linear;

  .checkbox {
    cursor: pointer;
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    margin: 0;
    &::before {
      content: "";
      min-width: 2rem;
      height: 2rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: ${designVariables.colorFooterBg};
      opacity: 1;
    }
    &::after {
      min-width: 1rem;
      height: 1rem;
      content: "";
      background-color: ${designVariables.palette.red100};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }
  }
  .checkbox:checked::after {
    opacity: 1;
  }
  .checkbox:checked::before {
    opacity: 0;
  }
  &:hover,
  &:focus {
    outline: 2px solid ${designVariables.palette.light300};
  }
  ${(props) => props && { ...props.style }}
`;
