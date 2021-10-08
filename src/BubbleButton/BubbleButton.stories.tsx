import React from "react";
import BubbleButton from "./BubbleButton";

export default {
  title: "BubbleButton",
};

export const Primary = () => (
  <BubbleButton
    onClick={() => {
      alert("Works!");
    }}
  >
    Sign Up
  </BubbleButton>
);

export const Secondary = () => (
  <BubbleButton
    secondary
    onClick={() => {
      alert("Works!");
    }}
  >
    Sign Up
  </BubbleButton>
);
