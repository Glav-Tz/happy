/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { useState } from 'react';
import { useIsMobile } from '../../../helpFunction/hooks';
import styles from './ShowsAndMasterclasses.module.scss';

import examplesWorksData from './data';
import Button from '../Button';

const ShowsAndMasterclasses = () => {
  const isMobile = useIsMobile();

  const [isHidden, setIsHidden] = useState(false);

  return (
    <section
      id="shows-and-masterclasses"
      className={`${styles.showsAndMasterclasses} ${styles.container}`}
    >
      <h1 className={styles.title}>Шоу и мастерклассы</h1>
      <div className={styles.examplesWorks}>
        {examplesWorksData.map((element, index) => {
          const { imgWorks, titleWorks } = element;
          if (isMobile && !isHidden) {
            return (
              index < 3 && (
                <div key={index} className={styles.example}>
                  <img
                    className={styles.example__img}
                    src={require(`../../../assets/img/ShowsAndMasterclasses/${imgWorks}.png`)}
                    alt="examples of works"
                  />
                  <span className={styles.example__desc}>{titleWorks}</span>
                </div>
              )
            );
          }

          if (!isHidden) {
            return (
              index < 6 && (
                <div key={index} className={styles.example}>
                  <img
                    className={styles.example__img}
                    src={require(`../../../assets/img/ShowsAndMasterclasses/${imgWorks}.png`)}
                    alt="examples of works"
                  />
                  <span className={styles.example__desc}>{titleWorks}</span>
                </div>
              )
            );
          }

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
      {!isHidden && (
        <Button
          onClick={() => setIsHidden(true)}
          className={styles.btnShow}
        >{`Показать ещё >>`}</Button>
      )}
    </section>
  );
};

export default ShowsAndMasterclasses;
