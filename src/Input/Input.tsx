import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../Theme/Theme";

import { InputProps } from "./Input.types";

const StyledDiv = styled.div`
  background-color: white;
  border: 1px solid black;
  display: inline-block;
  height: 36px;
  cursor: text;
  font-size: 1em;
  font-family: Roboto, sans-serif;

  border: 2px solid ${(props) => `${props.theme.primary};`}
  border-radius: ${(props) => `${props.theme.radius}px;`}
`;

const TitleText = styled.div<{ focused: boolean }>`
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  margin-left: 12px;
  margin-top: ${(props) => (props.focused ? "1" : "9")}px;
  font-weight: ${(props) => (props.focused ? "lighter" : "normal")};
  transition: font-size 0.3s, margin-top 0.3s, color 0.3s;
  color: ${(props) =>
    props.focused ? props.theme.lightgrey : props.theme.grey};

  font-size: ${(props) => (props.focused ? "0.6" : "1")}em;
  pointer-events: none;
`;

const TextInput = styled.input`
  border: none !important;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 6px;
  margin-left: 8px;
  margin-right: 8px;
  &:focus {
    border: none !important;
    outline: none;
  }
`;

const Input: React.FC<InputProps> = (props) => {
  const [focused, setFocused] = useState(false);

  const isFocused = () => {
    console.log(props.value.length);
    if (!focused && props.value.length > 0) {
      return true;
    } else if (focused) {
      return true;
    } else {
      return false;
    }
  };

  const shouldBeFocused = isFocused();

  return (
    <StyledDiv theme={Theme} onClick={() => {}}>
      <TitleText theme={Theme} focused={shouldBeFocused}>
        {props.title}
      </TitleText>
      <TextInput
        type="text"
        onChange={props.onChange}
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
