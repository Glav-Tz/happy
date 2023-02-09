import AliceCarousel from 'react-alice-carousel';
import { useEffect, useState } from 'react';

import dataOfCarusel from './data';
import styles from './CollectionVideos.module.scss';
import CareuselValue from './component';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};

const CollectionVideos = () => {
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
      <AliceCarousel
        autoPlayStrategy="default"
        disableDotsControls
        mouseTracking
        items={arrElementsOfSlider}
        responsive={responsive}
        animationDuration={2000}
      />
    </section>
  );
};

export default CollectionVideos;
