import styles from './Reviews.module.scss';

const Reviews = () => {
  return (
    <section className={`${styles.reviews} ${styles.container}`}>
      <div className={styles.title}>Реальные отзывы</div>
      <div className={styles.reviewsVK} />
    </section>
  );
};

export default Reviews;
