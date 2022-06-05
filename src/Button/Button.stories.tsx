import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Button from "./Button";

export default {
  title: "Buttons",
  component: Button,
} as ComponentMeta<typeof Button>;

export const PrimaryButtons: ComponentStory<typeof Button> = () => (
  <div>
    <Button>Sign up</Button>
    <Button secondary={true}>Sign up</Button>
  </div>
);
