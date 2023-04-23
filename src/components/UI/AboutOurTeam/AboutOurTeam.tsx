import Partners from '../Partners';
import SliderTeam from '../SliderTeam';
import styles from './AboutOurTeam.module.scss';

type Props = {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const AboutOurTeam = ({ setIsActive }: Props) => {
  return (
    <section
      id="about-our-team"
      className={`${styles.aboutOurTeam} ${styles.container}`}
    >
      <h1 className={styles.title}>О нас</h1>
      <div className={styles.wrapper}>
        <SliderTeam setIsActive={setIsActive} />
        <Partners />
      </div>
    </section>
  );
};

export default AboutOurTeam;
