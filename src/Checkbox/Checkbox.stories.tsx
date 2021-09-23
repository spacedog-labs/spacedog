import Checkbox from "./Checkbox";
import React, { useState } from "react";

export default {
  title: "Checkbox",
};

export const Primary = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onClick={() => {
        setChecked(!checked);
      }}
    />
  );
};
