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
            Родилась и выросла в Небуге, в Туапсинском районе, люблю наш
            курортный край и рада, что могу приносить пользу именно здесь.
            <br />
            <br />
            Училась в Самаре в художественном училище на дизайнера среды и там
            же в студенческие годы начала подрабатывать аниматором.
            <br />
            <br />
            Вернувшись после учебы, работала графическим дизайнером и продолжала
            заниматься праздниками “для души”, а не так давно решила совместить
            свои навыки дизайнера и ведущей детских праздников, разрабатывая
            крутые игровые программы и создавая для них свой дизайнерский
            реквизит.
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
      </div>
      <Partners />
    </section>
  );
};

export default AboutOurTeam;
