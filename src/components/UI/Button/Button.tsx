import {
  ButtonProps,
} from "../../models/ButtonProps";

const Button: React.FC<ButtonProps> = ({ type, onClick, className, children }) => {
  return <button
    type={type || 'button'}
    className={className ? className : 'button'}
    onClick={onClick}
  >
    {children}
  </button>
}

export default Button;