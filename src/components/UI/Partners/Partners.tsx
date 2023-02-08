import styles from './Partners.module.scss';
import partnersValue from './data';

const Partners = () => {
  return (
    <section className={styles.partners}>
      <h2 className={styles.title}>Наши друзья и партнеры</h2>
      <div className={styles.affiliatePrograms}>
        {partnersValue.map((element, index) => {
          const { bgColor } = element;
          return (
            <div
              key={index}
              style={{ backgroundColor: `${bgColor}` }}
              className={styles.logo}
            >
              LOGO
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Partners;
