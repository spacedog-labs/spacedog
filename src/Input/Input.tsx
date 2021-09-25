import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../Theme/Theme";

import { InputProps } from "./Input.types";

const StyledDiv = styled.div`
  background-color: white;
  border: 1px solid black;
  display: inline-block;
  padding: 4px;
  cursor: text;

  border: 2px solid ${(props) => `${props.theme.primary};`}
  border-radius: ${(props) => `${props.theme.radius}px;`}
`;

const TitleText = styled.div<{ focused: boolean }>`
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: ${(props) => (props.focused ? "0.5" : "1")}em;
  pointer-events: none;

  color: ${(props) => `${props.theme.grey};`};
`;

const TextInput = styled.input`
  border: none !important;
  margin-top: 8px;

  &:focus {
    border: none !important;
    outline: none;
  }
`;

const Input: React.FC<InputProps> = (props) => {
  const [focused, setFocused] = useState(false);

  const isFocused = () => {
    if (!focused && props.value.length > 0) {
      return true;
    } else if (focused) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <StyledDiv theme={Theme} onClick={() => {}}>
      <TitleText focused={isFocused()}>{props.title}</TitleText>
      <TextInput
        type="text"
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
      ></TextInput>
    </StyledDiv>
  );
};

export default Input;
