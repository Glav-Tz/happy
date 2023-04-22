/* eslint-disable global-require */
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

      <a
        className={`${styles.btnMainScreen} ${styles.button}`}
        href="#contacts"
      >
        Связаться с нами
      </a>
    </section>
  );
};

export default MainScreen;
