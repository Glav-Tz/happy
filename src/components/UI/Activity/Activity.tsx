import Consultation from '../Consultation';
import styles from './Activity.module.scss';

const Activity = () => {
  return (
    <section className={`${styles.activity} ${styles.container}`}>
      <Consultation />
    </section>
  );
};

export default Activity;
