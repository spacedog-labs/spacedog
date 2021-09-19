import React from "react";
import OmegaButton from "./OmegaButton";

export default {
  title: "OmegaButton",
};

export const Primary = () => (
  <OmegaButton
    onClick={() => {
      alert("Works!");
    }}
  >
    Sign Up
  </OmegaButton>
);

export const Secondary = () => (
  <OmegaButton
    secondary
    onClick={() => {
      alert("Works!");
    }}
  >
    Sign Up
  </OmegaButton>
);
