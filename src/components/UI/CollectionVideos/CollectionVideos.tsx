/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import styles from './CollectionVideos.module.scss';
import dataOfCarousel from './data';
import VideoElement from './VideoElement';

const CollectionVideos = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
  };
  return (
    <section
      id="collection-videos"
      className={`${styles.collectionVideos} ${styles.container}`}
    >
      <h1 className={styles.title}>Видео с праздников</h1>

      <div className={styles.sliderVideo}>
        <Slider {...setting}>
          <div>
            <VideoElement nameVideo={dataOfCarousel[0].nameVideo} />
          </div>
          <div>
            <VideoElement nameVideo={dataOfCarousel[1].nameVideo} />
          </div>
          <div>
            <VideoElement nameVideo={dataOfCarousel[2].nameVideo} />
          </div>
          <div>
            <VideoElement nameVideo={dataOfCarousel[3].nameVideo} />
          </div>
          <div>
            <VideoElement nameVideo={dataOfCarousel[4].nameVideo} />
          </div>
          <div>
            <VideoElement nameVideo={dataOfCarousel[5].nameVideo} />
          </div>
          {/* {dataOfCarousel.map((element, index) => {
            const { nameVideo } = element;
            return <VideoElement key={index} nameVideo={nameVideo} />;
          })} */}
        </Slider>
      </div>
    </section>
  );
};

export default CollectionVideos;
