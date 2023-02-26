/* eslint-disable global-require */
import Button from '../Button';
import styles from './MainScreen.module.scss';

const MainScreen = () => {
  return (
    <section className={`${styles.mainScreen} ${styles.container}`}>
      <h1 className={styles.title}>
        Детские праздники в Туапсе с лучшими аниматорами города
      </h1>
      <Button className={styles.btnMainScreen}>Устроить детям праздник</Button>
    </section>
  );
};

export default MainScreen;

// /* <video className={styles.videoPresentation} muted loop>
//       <source
//         src={require('../../../assets/videos/videoPresentation.mp4')}
//         type="video/mp4"
//       />
//     </video> */
