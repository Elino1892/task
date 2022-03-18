export interface ButtonProps {
  type: "submit" | "button";
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}
