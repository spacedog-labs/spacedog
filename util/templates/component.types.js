module.exports = (componentName) => ({
  content: `
    export interface ${componentName}Props {
        theme: "primary" | "secondary";
    }
`,
  extension: `.types.ts`,
});
