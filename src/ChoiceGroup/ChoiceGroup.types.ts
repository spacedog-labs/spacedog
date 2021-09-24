export interface ChoiceGroupProps {
  selected?: number;
  items: ChoiceGroupItem[];
  disabled?: boolean;
  selectionCallback?: (selectedIndex: number) => void;
}

export type ChoiceGroupItem = {
  description: string;
  anyInfo?: any;
};
