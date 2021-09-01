import React from "react";
import styled from "styled-components";
import Theme from "../Theme/Theme";
import { ButtonProps } from "./Button.types";

const BaseButton = styled.div`
  text-align: center;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  border-color: ${(props) => `${props.theme.primary};`}
  border: 2px solid;
    ${(props) => `border-radius: ${props.theme.radius}px;`};
`;

const Button: React.FC<ButtonProps> = (props) => (
  <BaseButton onClick={props.onClick} theme={Theme}>
    Primary Button
  </BaseButton>
);

export default Button;
