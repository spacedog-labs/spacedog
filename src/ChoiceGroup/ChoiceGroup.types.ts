export interface ChoiceGroupProps {
  selected?: number;
  items: ChoiceGroupItem[];
  disabled?: boolean;
  selectionCallback?: (selectedIndex: number) => void;
  children: React.ReactNode;
}

export type ChoiceGroupItem = {
  description: string;
  anyInfo?: any;
};
