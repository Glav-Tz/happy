import Carousel from 'react-multi-carousel';
import careuselValueCollectionVideos from './data';
import styles from './CollectionVideos.module.scss';

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 0,
    },
    items: 4,
  },
};

const CollectionVideos = () => {
  return (
    <section className={`${styles.collectionVideos} ${styles.container}`}>
      <h1 className={styles.title}>Видео с праздинков</h1>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {careuselValueCollectionVideos.map((element, index) => {
          const { text } = element;
          console.log(123);
          return (
            <div key={index} className={styles.video}>
              {text}
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default CollectionVideos;
