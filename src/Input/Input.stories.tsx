import React, { useState } from "react";
import Input from "./Input";

export default {
  title: "Input",
};

export const Primary = () => {
  const [value, setValue] = useState<string>("");
  return (
    <Input
      title="Work Email"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      }}
    />
  );
};
