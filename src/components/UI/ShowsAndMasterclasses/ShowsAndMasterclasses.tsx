/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import styles from './ShowsAndMasterclasses.module.scss';

import examplesWorksData from './data';
import Button from '../Button';

const ShowsAndMasterclasses = () => {
  return (
    <section
      id="shows-and-masterclasses"
      className={`${styles.showsAndMasterclasses} ${styles.container}`}
    >
      <h1 className={styles.title}>Шоу и мастерклассы</h1>
      <div className={styles.examplesWorks}>
        {examplesWorksData.map((element, index) => {
          const { imgWorks, titleWorks } = element;
          return (
            <div key={index} className={styles.example}>
              <img
                className={styles.example__img}
                src={require(`../../../assets/img/ShowsAndMasterclasses/${imgWorks}.png`)}
                alt="examples of works"
              />
              <span className={styles.example__desc}>{titleWorks}</span>
            </div>
          );
        })}
      </div>
      <Button className={styles.btnShow}>{`Показать ещё >>`}</Button>
    </section>
  );
};

export default ShowsAndMasterclasses;
