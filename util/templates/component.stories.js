module.exports = (componentName) => ({
  content: `import React from "react";
import ${componentName} from "./${componentName}";

export default {
  title: "${componentName}"
};

export const Primary = () => <${componentName}/>;

export const Secondary = () => <${componentName}/>;
`,
  extension: `.stories.tsx`,
});
