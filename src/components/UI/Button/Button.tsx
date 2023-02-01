import { MouseEvent, ReactNode, CSSProperties } from 'react';
import styles from './Button.module.scss';

type Props = {
  className?: string;
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
  children?: ReactNode;
  disabled?: boolean;
  style?: CSSProperties;
};

const Button = ({ className, onClick, children, disabled, style }: Props) => {
  const cardClasses = [styles.button, className];

  return (
    <button
      type="button"
      style={style}
      onClick={onClick}
      disabled={disabled}
      className={cardClasses.join(' ')}
    >
      {children}
    </button>
  );
};

export default Button;
