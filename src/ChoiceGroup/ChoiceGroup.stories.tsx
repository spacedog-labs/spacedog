import React, { useState } from "react";
import ChoiceGroup from "./ChoiceGroup";
import { ChoiceGroupItem } from "./ChoiceGroup.types";

export default {
  title: "ChoiceGroup",
};

const threeItems: ChoiceGroupItem[] = [
  { description: "First item in the list!" },
  { description: "Second item in the list!" },
  { description: "Third! ❤️❤️❤️" },
];

export const ThreeItems = () => {
  const [selected, setSelected] = useState(0);
  return (
    <ChoiceGroup
      items={threeItems}
      selected={selected}
      selectionCallback={(num) => {
        setSelected(num);
      }}
    />
  );
};

const twentyItems: ChoiceGroupItem[] = [
  {
    description:
      "First item in the list! First item in the list! First item in the list!",
  },
  { description: "Second item in the list!" },
  { description: "Third! ❤️❤️❤️" },
  { description: "sssssss😁🍪🔏😂😊😂😂ssssss! " },
  { description: "Third! ❤️❤️❤️" },
  { description: "Storybook is awesome!" },
  { description: "Third! ❤️❤️❤️" },
  { description: "❤️❤️❤️" },
  { description: "Third! ❤️❤️❤️" },
  { description: "Third! ❤️❤️❤️" },
  { description: "Third! ❤️❤️❤️" },
];

export const TwentyItems = () => {
  const [selected, setSelected] = useState(0);
  return (
    <ChoiceGroup
      items={twentyItems}
      selected={selected}
      selectionCallback={(num) => {
        setSelected(num);
      }}
    />
  );
};
