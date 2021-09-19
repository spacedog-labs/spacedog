import React from "react";
import Button from "./Button";

export default {
  title: "Button",
};

export const Primary = () => (
  <Button
    onClick={() => {
      alert("Works!");
    }}
  >
    Sign Up
  </Button>
);

export const Secondary = () => (
  <Button
    secondary
    onClick={() => {
      alert("Works!");
    }}
  >
    Sign Up
  </Button>
);