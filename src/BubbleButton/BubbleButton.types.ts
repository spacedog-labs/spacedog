export interface BubbleButtonProps {
  disable?: boolean;
  secondary?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  children: React.ReactNode;
}
