import { SetStateAction, Dispatch } from 'react';
import styles from './ButtonHero.module.scss';

type Props = {
  id: number;
  value: string;
  isActive: boolean;
  setActiveButton: Dispatch<SetStateAction<number>>;
};
const ButtonHero = ({ id, value, isActive, setActiveButton }: Props) => {
  const clickHandler = () => {
    setActiveButton(id);
  };
  return (
    <button
      type="button"
      className={styles.ButtonHero}
      value={value}
      onClick={clickHandler}
      style={{
        backgroundColor: isActive ? '#000000' : 'transparent',
        color: isActive ? '#FFFFFF' : '#000000',
      }}
    >
      {value}
    </button>
  );
};

export default ButtonHero;
