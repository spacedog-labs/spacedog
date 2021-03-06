export interface ButtonProps {
  disable?: boolean;
  secondary?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  children: React.ReactNode;
}
