import React, { useState, useRef, SetStateAction } from "react";
import styled from "styled-components";
import Theme from "../Theme/Theme";

import { Branch, TreeProps } from "./Tree.types";

const Container = styled.div`
  display: flex;
  user-select: none;
`;

const InnerContainer = styled.div`
  transition: width 0.5s;
`;

const BranchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
`;

const LeftBranchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CurrentBranch = styled.div<{ theme: Theme; selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.2s;
  background-color: ${(props) =>
    props.selected ? props.theme.lightblue : props.theme.secondary};
  &:hover {
    background-color: ${(props) => `${props.theme.lightgrey};`};
  }
  border-radius: ${(props) => `${props.theme.radius}px;`}
  padding: 2px;
  padding-right: 8px;
`;

const BranchName = styled.div<{ selected: boolean }>`
  ${(props) => (props.selected ? "font-weight: bold;" : "")}
  font-family: Roboto, sans-serif;
  margin-left: 1em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 15em;
`;

const Expander = styled.div<{ expanded: boolean; theme: Theme }>`
  height: 1em;
  width: 1em;
  transform: rotate(${(props) => (props.expanded ? "0deg" : "180deg")});
  cursor: pointer;
  transition: background-color 0.2s, transform 0.3s;
  &:hover {
    background-color: ${(props) => `${props.theme.darkgrey};`};
  }
  padding: 3px;
  border-radius: 50%;
  margin-left: 1em;
`;

const IconContainer = styled.div`
  margin-left: 1em;
`;

const ChildrenBranches = styled.div<{ expanded: boolean; level: number }>`
  display: ${(props) => (props.expanded ? "block" : "none")};
  margin-left: ${(props) => (props.level * 16).toString()}px;
`;

const Tree: React.FC<TreeProps> = (props) => {
  return (
    <Container>
      <InnerContainer>{RenderBranch(props.branch, 0)}</InnerContainer>
    </Container>
  );
};

const RenderBranch = (branch: Branch, level: number) => {
  level = level + 1;

  const [expanded, setExpanded] = useState(branch.expanded);
  const [selected, setSelected] = useState(
    branch.selected == null ? false : branch.selected
  );

  const expand = () => {
    setExpanded(!expanded);
  };

  const select = (isSelected: boolean) => {
    setSelected(isSelected);
  };

  const setSelectedRef = useRef<(isSelected: boolean) => void>();
  setSelectedRef.current = select;

  return (
    <BranchContainer>
      <CurrentBranch
        theme={Theme}
        selected={selected}
        onClick={() => {
          if (branch.onClick != null) {
            setSelected(!selected);
            branch.onClick(branch.onClickData, setSelectedRef);
          }
        }}
      >
        <LeftBranchContainer>
          {branch.branches.length > 0 ? (
            <Expander
              expanded={expanded}
              theme={Theme}
              onClick={(ev) => {
                ev.stopPropagation();
                expand();
              }}
            >
              <ExpanderIcon />
            </Expander>
          ) : (
            <></>
          )}
          <IconContainer>
            {branch.icon != null ? branch.icon : <></>}
          </IconContainer>
          <BranchName title={branch.name} selected={branch.selected}>
            {branch.name}
          </BranchName>
        </LeftBranchContainer>
      </CurrentBranch>
      <ChildrenBranches expanded={expanded} level={level}>
        {branch.branches.map((child) => RenderBranch(child, level))}
      </ChildrenBranches>
    </BranchContainer>
  );
};

const ExpanderIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 12 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.2635 4.81045L5.31862 1.3034L6.0551 0L12 3.50705L11.2635 4.81045Z"
      fill="#121313"
    />
    <path
      d="M6.68821 1.49295L0.74331 5L0 3.68451L5.9449 0.177454L6.68821 1.49295Z"
      fill="#121313"
    />
  </svg>
);
export default Tree;
