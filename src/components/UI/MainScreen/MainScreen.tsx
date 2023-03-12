/* eslint-disable global-require */
import { Dispatch, SetStateAction } from 'react';
import Button from '../Button';
import styles from './MainScreen.module.scss';

type Props = {
  setIsActive: Dispatch<SetStateAction<boolean>>;
};
const MainScreen = ({ setIsActive }: Props) => {
  return (
    <section
      id="main-screen"
      className={`${styles.mainScreen} ${styles.container}`}
    >
      <h1 className={styles.title}>
        Детские праздники в Туапсе и районе с лучшими аниматорами города
      </h1>
      <Button
        onClick={() => setIsActive(true)}
        className={styles.btnMainScreen}
      >
        Рассчитать стоимость
      </Button>
    </section>
  );
};

export default MainScreen;
