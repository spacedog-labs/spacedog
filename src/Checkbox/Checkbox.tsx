import React from "react";
import styled from "styled-components";
import Theme from "../Theme/Theme";
import { CheckboxProps } from "./Checkbox.types";

const PrimaryCheckbox = styled.div`
  display: inline-block;
  text-align: center;
  height: 1em;
  width: 1em;
  margin:4px;
  cursor: pointer;
  transition: background-color .3s;
  &:hover {
    background-color: ${(props) => `${props.theme.lightgrey};`}
  }
  border-color: ${(props) => `${props.theme.primary};`}
  border: 2px solid;
    ${(props) => `border-radius: ${props.theme.radius}px;`};
    -webkit-user-select: none;       
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;
`;

const Check = styled.div<{ visible: boolean }>`
  height: 100%;
  width: 100%;
  transition: opacity 0.1s;
  opacity: ${(props) => (props.visible ? "100" : "0")};
`;

const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <PrimaryCheckbox onClick={props.onClick} theme={Theme}>
      <Check visible={props.checked}>
        <svg
          width="80%"
          height="80%"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.74095 9.15369L10.194 15.7827L8.45305 18.1768L0 11.5477L1.74095 9.15369Z"
            fill="#121313"
          />
          <path
            d="M20.5087 1.82671L9.02242 17.3658L6.73082 15.5391L18.2171 0L20.5087 1.82671Z"
            fill="#121313"
          />
        </svg>
      </Check>
    </PrimaryCheckbox>
  );
};

export default Checkbox;
