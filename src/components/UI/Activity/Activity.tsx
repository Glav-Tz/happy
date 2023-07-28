import Consultation from '../Consultation';
import ShowsAndMasterclasses from '../ShowsAndMasterclasses';
import styles from './Activity.module.scss';

type Props = {
  setIsActiveCheckPhone: React.Dispatch<React.SetStateAction<boolean>>;
  isActiveCheckPhone: boolean;
};

const Activity = ({ setIsActiveCheckPhone, isActiveCheckPhone }: Props) => {
  return (
    <section className={`${styles.activity} ${styles.container}`}>
      <Consultation
        isActiveCheckPhone={isActiveCheckPhone}
        setIsActiveCheckPhone={setIsActiveCheckPhone}
      />
      <ShowsAndMasterclasses />
    </section>
  );
};

export default Activity;
