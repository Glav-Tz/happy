import styles from './ShowsAndMasterclasses.module.scss';

import { examplesWorksData, BASE_IMG_URL_SHOW } from './data';
import Button from '../Button';

const ShowsAndMasterclasses = () => {
  return (
    <div className={`${styles.sahowsAndMasterclasses} ${styles.container}`}>
      <h1 className={styles.title}>Шоу и мастерклассы</h1>
      <div className={styles.examplesWorks}>
        {examplesWorksData.map((element, index) => {
          const { imgWorks, titleWorks } = element;
          return (
            <div key={index} className={styles.example}>
              <img
                className={styles.example__img}
                src={`${BASE_IMG_URL_SHOW}${imgWorks}`}
                alt="examples of works"
              />
              <span className={styles.example__desc}>{titleWorks}</span>
            </div>
          );
        })}
      </div>
      <Button className={styles.btnShow}>Показать ещё</Button>
    </div>
  );
};

export default ShowsAndMasterclasses;
