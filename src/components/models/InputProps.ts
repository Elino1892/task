import React from "react";

interface Input {
  type: string;
  placeholder?: string;
}

export interface InputProps {
  input: Input;
  className?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.ForwardedRef<HTMLInputElement>;
}
