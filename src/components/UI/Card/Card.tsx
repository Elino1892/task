import { CardProps } from "../../models/CardProps";

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <section
      className={className ? `card ${className}` : 'card'}
    >
      {children}
    </section>
  );
};

export default Card;