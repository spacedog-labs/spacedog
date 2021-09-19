import React from "react";
import styled from "styled-components";
import Theme from "../Theme/Theme";
import { OmegaButtonProps } from "./OmegaButton.types";

const PrimaryButton = styled.div`
  display: inline-block;
  text-align: center;
  margin:4px;
  padding: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  cursor: pointer;
  transition: background-color .3s, border-color .3s;
  font-size: 1.5em;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  &:hover {
    background-color: ${(props) => `${props.theme.darkgrey};`}
    border-color: ${(props) => `${props.theme.darkgrey};`}
  }
  background-color: ${(props) => `${props.theme.primary};`}
  border: 2px solid ${(props) => `${props.theme.primary};`}
  border-radius: ${(props) => `${props.theme.radius}px;`}
  color: ${(props) => `${props.theme.secondary};`}
  -webkit-user-select: none;       
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
`;

const SecondaryButton = styled.div`
  display: inline-block;
  text-align: center;
  margin:4px;
  padding: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  cursor: pointer;
  transition: background-color .3s;
  font-size: 1.5em;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  &:hover {
    background-color: ${(props) => `${props.theme.grey};`}
  }
  border-color: ${(props) => `${props.theme.primary};`}
  border: 2px solid;
    ${(props) => `border-radius: ${props.theme.radius}px;`};
    -webkit-user-select: none;       
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;
`;

const OmegaButton: React.FC<OmegaButtonProps> = (props) => {
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

export default OmegaButton;
