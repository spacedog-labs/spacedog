import React from "react";
import styled from "styled-components";
import Theme from "../Theme/Theme";
import { ButtonProps } from "./Button.types";

const PrimaryButton = styled.div`
  display: inline-block;
  text-align: center;
  margin:4px;
  padding: 4px;
  padding-left: 2em;
  padding-right: 2em;
  cursor: pointer;
  transition: background-color .3s, border-color .3s;
  font-size: 1em;
  font-family: Roboto, sans-serif;
  &:hover {
    background-color: ${(props) => `${props.theme.darkgrey};`}
    border-color: ${(props) => `${props.theme.darkgrey};`}
  }
  background-color: ${(props) => `${props.theme.primary};`}
  border: 2px solid ${(props) => `${props.theme.primary}`};
  border-radius: ${(props) => `${props.theme.radius}px;`}
  color: ${(props) => `${props.theme.secondary}`}
`;

const SecondaryButton = styled.div`
  display: inline-block;
  text-align: center;
  margin:4px;
  padding: 4px;
  padding-left: 2em;
  padding-right: 2em;
  cursor: pointer;
  transition: background-color .3s;
  font-size: 1em;
  font-family: Roboto, sans-serif;
  &:hover {
    background-color: ${(props) => `${props.theme.grey};`}
  }
  border-color: ${(props) => `${props.theme.primary};`}
  border: 2px solid;
    ${(props) => `border-radius: ${props.theme.radius}px;`};
`;

const Button: React.FC<ButtonProps> = (props) => {
  if (props.secondary) {
    return (
      <SecondaryButton onClick={props.onClick} theme={Theme}>
        {props.children}
      </SecondaryButton>
    );
  } else {
    return (
      <PrimaryButton onClick={props.onClick} theme={Theme}>
        {props.children}
      </PrimaryButton>
    );
  }
};

export default Button;
