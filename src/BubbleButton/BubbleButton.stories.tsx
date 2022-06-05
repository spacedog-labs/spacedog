import { ComponentStory, ComponentMeta } from "@storybook/react";
import BubbleButton from "./BubbleButton";

export default {
  title: "Buttons",
  component: BubbleButton,
} as ComponentMeta<typeof BubbleButton>;

export const BubbleButtons: ComponentStory<typeof BubbleButton> = () => (
  <div>
    <BubbleButton>Sign up</BubbleButton>
    <BubbleButton secondary={true}>Sign up</BubbleButton>
  </div>
);
