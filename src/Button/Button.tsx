
  import React from "react";
  import styled from "styled-components";
  
  import { ButtonProps } from "./Button.types";
  
  const StyledDiv = styled.div`
    background-color: white;
    border: 1px solid black;
    padding: 16px;
    width: 360px;
    text-align: center;
  
    ${(props) =>
      props.theme === "secondary" &&
      `background-color: black;
       color: white;`}
  `;
  
  const StyledHeading = styled.h1`
    font-size: 32px;
  `;
  
  const StyledDescription = styled.h2``;
  
  const Button: React.FC<ButtonProps> = ({ theme }) => (
    <StyledDiv data-testid="Button" theme={theme}>
        <h1>New Component Button</h1>
    </StyledDiv>
  );
  
  export default Button;
