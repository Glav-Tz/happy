import Partners from '../Partners';
import styles from './AboutOurTeam.module.scss';
import SliderTeam from '../SliderTeam';

const AboutOurTeam = () => {
  return (
    <section
      id="about-our-team"
      className={`${styles.aboutOurTeam} ${styles.container}`}
    >
      <h1 className={styles.title}>О нас</h1>
      <div className={styles.wrapper}>
        <SliderTeam />
        <Partners />
      </div>
    </section>
  );
};

export default AboutOurTeam;
