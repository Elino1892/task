import { forwardRef } from "react";
import { InputProps } from "../../models/InputProps";

const Input: React.FC<InputProps> = forwardRef(({ value, input, className, onChange }, ref) => {
  return (
    <input
      onChange={onChange}
      value={value}
      ref={ref}
      className={className}
      {...input}>
    </input>
  )
});

export default Input;