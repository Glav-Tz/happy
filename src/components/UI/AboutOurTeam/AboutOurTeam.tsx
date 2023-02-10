import AliceCarousel from 'react-alice-carousel';
import { useEffect, useRef, useState } from 'react';

import { ReactComponent as PlayIcon } from '../../../assets/icon/play.svg';

import 'react-alice-carousel/lib/alice-carousel.css';

import { ReactComponent as LeftArrow } from '../../../assets/icon/arrow/left_arrow.svg';
import { ReactComponent as RightArrow } from '../../../assets/icon/arrow/right_arrow.svg';

import Button from '../Button';
import Partners from '../Partners';
import styles from './AboutOurTeam.module.scss';
import CareuselValue from './component';
import dataOfCarusel from './data';

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};

const AboutOurTeam = () => {
  const carousel = useRef<AliceCarousel>(null);
  const [arrElementsOfSlider, setArrElementsOfSlider] = useState<JSX.Element[]>(
    [],
  );

  useEffect(() => {
    const result = dataOfCarusel.map((item, index) => {
      const { bgColor } = item;
      return <CareuselValue key={index} bgColor={bgColor} />;
    });
    setArrElementsOfSlider([...result]);
  }, []);

  return (
    <section className={`${styles.aboutOurTeam} ${styles.container}`}>
      <h1 className={styles.title}>О нас</h1>
      <div className={styles.wrapperBlok}>
        <div className={styles.employee}>
          <div className={styles.employee__name}>Сидоренко Юля</div>
          <div className={styles.employee__post}>
            Мама, дизайнер и основатель “Индустрии праздника”
          </div>
          <div className={styles.employee__desc}>
            Повседневная практика показывает, что новая модель организационной
            деятельности позволяет оценить значение позиций, занимаемых
            участниками в отношении поставленных задач. Разнообразный и богатый
            опыт постоянное информационно-пропагандистское обеспечение нашей
            деятельности позволяет оценить значение новых предложений. С другой
            стороны сложившаяся структура организации способствует подготовки и
            реализации дальнейших направлений развития.
          </div>
          <Button className={styles.employee__moreDetailed}>
            <PlayIcon />
            Видео обо мне
          </Button>
        </div>

        <div className={styles.sliderTeam}>
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
              className={styles.btnCarusel}
              type="button"
              onClick={(e) => carousel?.current?.slidePrev(e)}
            >
              <RightArrow />
            </button>
            <button
              className={styles.btnCarusel}
              type="button"
              onClick={(e) => carousel?.current?.slideNext(e)}
            >
              <LeftArrow />
            </button>
          </div>
        </div>
      </div>
      <Partners />
    </section>
  );
};

export default AboutOurTeam;
