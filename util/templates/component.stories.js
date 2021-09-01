module.exports = (componentName) => ({
  content: `
    import React from "react";
    import ${componentName} from "./${componentName}";

    export default {
    title: "${componentName}"
    };

    export const Primary = () => <${componentName} theme="primary" />;

    export const Secondary = () => <${componentName} theme="secondary" />;
`,
  extension: `.stories.tsx`,
});
