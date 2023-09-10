import styles from './Reviews.module.scss';

const Reviews = () => {
  // window.onload = () => {
  //   console.log(123);
  // };

  return (
    <section id="reviews" className={`${styles.reviews} ${styles.container}`}>
      <div className={styles.title}>Реальные отзывы</div>
      <div className={styles.wrapperReviews}>
        <div id="feedback_vk" className={styles.reviewsVK} />
      </div>
    </section>
  );
};

export default Reviews;
