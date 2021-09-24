import React from "react";
import styled from "styled-components";
import Theme from "../Theme/Theme";
import { ChoiceGroupProps } from "./ChoiceGroup.types";

const Container = styled.div`
  margin: 4px;
  display: flex;
  flex-direction: column;
`;

const Selector = styled.div`
  border-radius: 50%;
  width: 1em;
  height: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-color: ${(props) => `${props.theme.primary};`}
  border: 2px solid;
`;

const SelectorInner = styled.div<{ visible: boolean }>`
  border-radius: 50%;
  width: 0.75em;
  height: 0.75em;
  transition: opacity 0.15s;
  opacity: ${(props) => (props.visible ? "100" : "0")};
  background-color: ${(props) => `${props.theme.primary};`};
`;

const ChoiceItem = styled.div`
  height: 1.2em;
  margin: 4px;
  margin-top: 6px;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
`;

const ChoiceText = styled.div`
  margin-left: 1em;
  font-size: 1em;
  font-family: Roboto, sans-serif;
`;

const ChoiceGroup: React.FC<ChoiceGroupProps> = (props) => {
  console.log(props.items);
  return (
    <Container>
      {props.items.map((val, ind) => (
        <ChoiceItem>
          <Selector theme={Theme} onClick={() => props.selectionCallback(ind)}>
            <SelectorInner theme={Theme} visible={ind === props.selected} />
          </Selector>
          <ChoiceText>{val.description}</ChoiceText>
        </ChoiceItem>
      ))}
    </Container>
  );
};

export default ChoiceGroup;
