import styles from './MainScreen.module.scss';
import Button from '../Button';

const MainScreen = () => {
  return (
    <section className={`${styles.mainScreen} ${styles.container}`}>
      <Button className={styles.btnMainScreen}>Устроить детям праздник</Button>
    </section>
  );
};

export default MainScreen;
