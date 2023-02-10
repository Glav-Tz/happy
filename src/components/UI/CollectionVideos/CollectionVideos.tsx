import AliceCarousel from 'react-alice-carousel';
import { useEffect, useRef, useState } from 'react';

import 'react-alice-carousel/lib/alice-carousel.css';
import { ReactComponent as LeftArrow } from '../../../assets/icon/arrow/left_arrow.svg';
import { ReactComponent as RightArrow } from '../../../assets/icon/arrow/right_arrow.svg';

import dataOfCarusel from './data';
import CareuselValue from './component';
import styles from './CollectionVideos.module.scss';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};

const CollectionVideos = () => {
  const carousel = useRef<AliceCarousel>(null);
  const [arrElementsOfSlider, setArrElementsOfSlider] = useState<JSX.Element[]>(
    [],
  );

  useEffect(() => {
    const result = dataOfCarusel.map((item, index) => {
      const { text } = item;
      return <CareuselValue key={index} text={text} />;
    });
    setArrElementsOfSlider([...result]);
  }, []);

  return (
    <section className={`${styles.collectionVideos} ${styles.container}`}>
      <h1 className={styles.title}>Видео с праздинков</h1>
      <div className={styles.sliderVideo}>
        <AliceCarousel
          autoPlayStrategy="default"
          disableDotsControls
          disableButtonsControls
          mouseTracking
          items={arrElementsOfSlider}
          responsive={responsive}
          animationDuration={2000}
          ref={carousel}
        />
        <div className={styles.castomBtnCarusel}>
          <button
            className={styles.castomBtnCarusel__btnCarusel}
            type="button"
            onClick={(e) => carousel?.current?.slidePrev(e)}
          >
            <LeftArrow />
          </button>
          <button
            className={styles.castomBtnCarusel__btnCarusel}
            type="button"
            onClick={(e) => carousel?.current?.slideNext(e)}
          >
            <RightArrow />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollectionVideos;
