/* eslint-disable global-require */
import styles from './MainScreen.module.scss';
import Button from '../Button';

const MainScreen = () => {
  return (
    <section className={`${styles.mainScreen} ${styles.container}`}>
      <Button className={styles.btnMainScreen}>Устроить детям праздник</Button>
      <video className={styles.videoPresentation} autoPlay muted loop>
        <source
          src={require('../../../assets/videos/videoPresentation.mp4')}
          type="video/mp4"
        />
      </video>
    </section>
  );
};

export default MainScreen;
