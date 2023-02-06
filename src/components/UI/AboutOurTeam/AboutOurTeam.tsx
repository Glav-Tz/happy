import { ReactComponent as PlayIcon } from '../../../assets/icon/play.svg';

import Button from '../Button';
import Partners from '../Partners';
import styles from './AboutOurTeam.module.scss';

const AboutOurTeam = () => {
  return (
    <section className={`${styles.aboutOurTeam} ${styles.container}`}>
      <h1 className={styles.title}>О нас</h1>
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
      <div className={styles.sliderTeam} />
      <Partners />
    </section>
  );
};

export default AboutOurTeam;
