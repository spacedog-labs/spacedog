import React from "react";
import styled from "styled-components";
import Theme from "../Theme/Theme";

import { LabelProps } from "./Label.types";

const StyledDiv = styled.div`
  display: inline-block;
`;

const H1 = styled.h1`
  font-weight: bold;
  font-family: Roboto, sans-serif;
`;

const H2 = styled.h2`
  font-weight: bold;
  font-family: Roboto, sans-serif;
`;

const H3 = styled.h3`
  font-weight: bold;
  font-family: Roboto, sans-serif;
`;

const Label: React.FC<LabelProps> = (props) => {
  let text;

  switch (props.size) {
    case 1:
      text = <H1>{props.text}</H1>;
      break;

    case 2:
      text = <H2>{props.text}</H2>;
      break;

    case 3:
      text = <H3>{props.text}</H3>;
      break;

    default:
      break;
  }
  return <StyledDiv theme={Theme}>{text}</StyledDiv>;
};

export default Label;
