import Consultation from '../Consultation';
import ShowsAndMasterclasses from '../ShowsAndMasterclasses';
import styles from './Activity.module.scss';

const Activity = () => {
  return (
    <section className={`${styles.activity} ${styles.container}`}>
      <Consultation />
      <ShowsAndMasterclasses />
    </section>
  );
};

export default Activity;
