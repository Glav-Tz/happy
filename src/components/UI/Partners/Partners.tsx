/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import styles from './Partners.module.scss';
import partnersValue from './data';

const Partners = () => {
  return (
    <section className={styles.partners}>
      <h2 className={styles.title}>Наши друзья и партнеры</h2>
      <div className={styles.affiliatePrograms}>
        {partnersValue.map((element, index) => {
          const { bgMonochrome, bgColor } = element;
          return (
            <div className={styles.imgWrapper}>
              <img
                key={index}
                className={`${styles.logo_mono} ${styles.logo}`}
                src={require(`../../../assets/img/ourPartners/monochrome/${bgMonochrome}.png`)}
                alt="partners"
              />
              <img
                key={index}
                className={`${styles.logo_color} ${styles.logo}`}
                src={require(`../../../assets/img/ourPartners/color/${bgColor}.png`)}
                alt="partners"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Partners;
