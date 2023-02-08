import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { ReactComponent as PlayIcon } from '../../../assets/icon/play.svg';

import Button from '../Button';
import Partners from '../Partners';
import careuselValue from './data';
import styles from './AboutOurTeam.module.scss';

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 40,
  },
};

const AboutOurTeam = () => {
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

        <Carousel
          className={styles.sliderTeam}
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
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
          {careuselValue.map((element) => {
            const { bgColor } = element;
            return (
              <div
                style={{ backgroundColor: `${bgColor}` }}
                className={styles.foroTeam}
              />
            );
          })}
        </Carousel>
      </div>

      <Partners />
    </section>
  );
};

export default AboutOurTeam;
