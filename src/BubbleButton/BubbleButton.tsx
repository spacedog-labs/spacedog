import React from "react";
import styled from "styled-components";
import Theme from "../Theme/Theme";
import { BubbleButtonProps } from "./BubbleButton.types";

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
  font-weight: bold;
  font-family: Roboto, sans-serif;
  &:hover {
    background-color: ${(props) => `${props.theme.tertiary};`}
    border-color: ${(props) => `${props.theme.tertiary};`}
  }
  background-color: ${(props) => `${props.theme.primary};`}
  border: 2px solid ${(props) => `${props.theme.primary};`}
  border-radius: ${(props) => `${props.theme.radius * 2}px;`}
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
  padding: 4px;
  padding-left: 2em;
  padding-right: 2em;
  cursor: pointer;
  transition: background-color .3s;
  font-size: 1em;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  &:hover {
    background-color: ${(props) => `${props.theme.lightgrey};`}
  }
  border-color: ${(props) => `${props.theme.primary};`}
  border: 2px solid;
    ${(props) => `border-radius: ${props.theme.radius * 2}px;`};
    -webkit-user-select: none;       
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;
`;

const BubbleButton: React.FC<BubbleButtonProps> = (props) => {
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

export default BubbleButton;
