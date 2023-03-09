/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Header.module.scss';

import { ReactComponent as WhatsAppIcon } from '../../../assets/icon/messengers/color/wa.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/icon/phone.svg';

const Header = () => {
  return (
    <div className={`${styles.wrapperSticky} ${styles.container}`}>
      <header className={`${styles.header} ${styles.container}`}>
        <div className={styles.socialNetwork}>
          <WhatsAppIcon />
          <a className={styles.socialIcon} href="#">
            Написать WhatsApp
          </a>
        </div>

        <nav className={styles.navigate}>
          <div className={styles.navigateBlock_one}>
            <a className={styles.navigate__link} href="#main-screen">
              Наши герои
            </a>
            <a
              className={styles.navigate__link}
              href="#shows-and-masterclasses"
            >
              Шоу и мастерклассы
            </a>
            <a className={styles.navigate__link} href="#about-our-team">
              О нас
            </a>
          </div>

          <img
            className={styles.logo}
            src={require('../../../assets/img/logo.png')}
            alt="logo"
          />

          <div className={styles.navigateBlock_two}>
            <a className={styles.navigate__link} href="#collection-videos">
              Видео с праздников
            </a>
            <a className={styles.navigate__link} href="#reviews">
              Отзывы
            </a>
            <a className={styles.navigate__link} href="#contacts">
              Контакты
            </a>
          </div>
        </nav>

        <div className={styles.contactPhone}>
          <div className={styles.phoneIcon}>
            <PhoneIcon />
          </div>
          <a className={styles.phoneText} href="tel: +79881499490">
            +7 988 149-94-90
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
