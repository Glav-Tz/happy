import styles from './Partners.module.scss';

const Partners = () => {
  return (
    <section className={`${styles.partners} ${styles.container}`}>
      <h2 className={styles.title}>Наши друзья и партнеры</h2>
      <div className={styles.affiliatePrograms}>
        <span />
      </div>
    </section>
  );
};

export default Partners;
