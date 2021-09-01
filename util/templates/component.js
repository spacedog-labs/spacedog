module.exports = (componentName) => ({
  content: `
  import React from "react";
  import styled from "styled-components";
  
  import { ${componentName}Props } from "./${componentName}.types";
  
  const StyledDiv = styled.div\`
    background-color: white;
    border: 1px solid black;
    padding: 16px;
    width: 360px;
    text-align: center;
  
    \${(props) =>
      props.theme === "secondary" &&
      \`background-color: black;
       color: white;\`}
  \`;
  
  const StyledHeading = styled.h1\`
    font-size: 32px;
  \`;
  
  const StyledDescription = styled.h2\`\`;
  
  const ${componentName}: React.FC<${componentName}Props> = ({ theme }) => (
    <StyledDiv data-testid="${componentName}" theme={theme}>
        <h1>New Component ${componentName}</h1>
    </StyledDiv>
  );
  
  export default ${componentName};
`,
  extension: `.tsx`,
});
