import React from "react";
import styled from "styled-components";
import { designVariables } from "../../styles/globalVariables";
import { OutlinedButton } from "./button/OutlinedButton";
import { Checkbox } from "./checkbox/Checkbox";
import { InputText } from "./inputText/InputText";

export const Form = () => {
  return (
    <StyledForm action="">
      <div className="name-container grid-2">
        <InputText label="First Name" inputType="text" required width="100%" />
        <InputText label="Last Name" inputType="text" required width="100%" />
      </div>
      <InputText label="Email" inputType="email" required width="100%" />
      <InputText label="Company" inputType="text" width="100%" />
      <div className="btn-container grid-2">
        <div className="checkbox-container">
          <Checkbox style={{ marginRight: "2.5rem" }} />
          <p className="text">
            Etiam vel orci vel massa accumsan aliquam. Nunc sit amet placerat .
            Read our terms and conditions
          </p>
        </div>
        <OutlinedButton
          color="transparent"
          hoverColor={designVariables.palette.dark400}
          title="Subscribe"
          buttonStyle={{ width: "10rem", height: "2.7rem" }}
        />
      </div>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  .name-container {
    width: 100%;
    &.grid-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10%;
      margin: 0;
    }
  }
  input {
    margin: 1rem 0 2rem;
  }
  .btn-container {
    &.grid-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin: 0;
      grid-gap: 10%;
    }
    .checkbox-container {
      display: flex;
      .text {
        font-size: 0.625rem;
        line-height: 0.9;
        color: ${designVariables.colorTextPrimary};
        align-self: center;
        text-align: left;
      }
    }
    button {
    }
  }
`;
