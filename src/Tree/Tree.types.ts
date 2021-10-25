import { MutableRefObject } from "react";

export interface TreeProps {
  branch: Branch;
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
}

export interface BranchOnClickProps {
  props: any;
}
