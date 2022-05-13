import { MutableRefObject } from "react";

export interface TreeProps {
  branch: Branch;
  children: React.ReactNode;
}

export interface Branch {
  name: string;
  icon?: React.ReactNode;
  branches?: Branch[];
  expanded: boolean;
  onClick?: (
    props: BranchOnClickProps,
    callback: MutableRefObject<(isSelected: boolean) => void>
  ) => void;
  selected?: boolean;
  onClickData?: BranchOnClickProps;
  children: React.ReactNode;
}

export interface BranchOnClickProps {
  props: any;
  children: React.ReactNode;
}
