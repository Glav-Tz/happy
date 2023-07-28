/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { useRef, useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { ReactComponent as LeftArrow } from '../../../assets/icon/arrow/left_arrow.svg';
import { ReactComponent as RightArrow } from '../../../assets/icon/arrow/right_arrow.svg';

import { useIsMobile } from '../../../helpFunction/hooks';

import styles from './CollectionVideos.module.scss';
import './Slider.css';
import VideoElement from './VideoElement';
import dataOfCarousel from './data';

const CollectionVideos = () => {
  const isMobile = useIsMobile();

  const [currentSlide, setCurrentSlide] = useState(0);
  const slider = useRef<Slider | null>(null);

  const afterChangeEvent = (slide: number) => {
    setCurrentSlide(slide);
  };

  const setting = {
    centerMode: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    className: 'center',
    centerPadding: isMobile ? '250px' : '50px',
  };

  return (
    <section
      id="collection-videos"
      className={`${styles.collectionVideos} ${styles.container}`}
    >
      <h1 className={styles.title}>Видео с праздников</h1>

      <div className={styles.sliderVideo}>
        <Slider afterChange={afterChangeEvent} ref={slider} {...setting}>
          {dataOfCarousel.map((element, index) => {
            const { nameVideo } = element;
            return (
              <div key={index}>
                <VideoElement
                  currentSlide={currentSlide}
                  id={index}
                  nameVideo={nameVideo}
                />
              </div>
            );
          })}
        </Slider>
        <div className={styles.wrapperMainSlideBtn}>
          <button
            onClick={() => slider?.current?.slickPrev()}
            className={styles.mainSlideBtn}
            type="button"
          >
            <LeftArrow />
          </button>

          <button
            onClick={() => slider?.current?.slickNext()}
            className={styles.mainSlideBtn}
            type="button"
          >
            <RightArrow />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollectionVideos;
