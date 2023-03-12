import styles from './Reviews.module.scss';

const Reviews = () => {
  return (
    <section id="reviews" className={`${styles.reviews} ${styles.container}`}>
      <div className={styles.title}>Реальные отзывы</div>
      <div className={styles.wrapperReviews}>
        <div className={styles.reviewsVK} />
        <div className={styles.reviewsOne} />
        <div className={styles.reviewsTwo} />
      </div>
    </section>
  );
};

export default Reviews;
