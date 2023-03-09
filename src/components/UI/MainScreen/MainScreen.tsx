/* eslint-disable global-require */
import Button from '../Button';
import styles from './MainScreen.module.scss';

const MainScreen = () => {
  return (
    <section
      id="main-screen"
      className={`${styles.mainScreen} ${styles.container}`}
    >
      <h1 className={styles.title}>
        Детские праздники в Туапсе и районе с лучшими аниматорами города
      </h1>
      <Button className={styles.btnMainScreen}>Рассчитать стоимость</Button>
    </section>
  );
};

export default MainScreen;
