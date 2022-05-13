import React from "react";

export interface InputProps {
  title: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
}
