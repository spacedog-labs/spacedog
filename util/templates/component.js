module.exports = (componentName) => ({
  content: `import React from "react";
import styled from "styled-components";
import Theme from "../Theme/Theme";
  
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
    color: white;\`
  \}\`;
  
const ${componentName}: React.FC<${componentName}Props> = () => (
  <StyledDiv theme={Theme}/>
);
  
export default ${componentName};
`,
  extension: `.tsx`,
});
