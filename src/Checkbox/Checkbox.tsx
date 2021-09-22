import React from "react";
import styled from "styled-components";
import Theme from "../Theme/Theme";
import { CheckboxProps } from "./Checkbox.types";

const PrimaryCheckbox = styled.div`
  display: inline-block;
  text-align: center;
  height: 1.5em;
  width: 1.5em;
  margin:4px;
  cursor: pointer;
  transition: background-color .3s;
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

const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <PrimaryCheckbox onClick={props.onClick} theme={Theme}></PrimaryCheckbox>
  );
};

export default Checkbox;
