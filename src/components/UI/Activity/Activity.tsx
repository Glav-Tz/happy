import Consultation from '../Consultation';
import ShowsAndMasterclasses from '../ShowsAndMasterclasses';
import styles from './Activity.module.scss';

type Props = {
  setIsActiveCheck: React.Dispatch<React.SetStateAction<boolean>>;
};

const Activity = ({ setIsActiveCheck }: Props) => {
  return (
    <section className={`${styles.activity} ${styles.container}`}>
      <Consultation setIsActiveCheck={setIsActiveCheck} />
      <ShowsAndMasterclasses />
    </section>
  );
};

export default Activity;
