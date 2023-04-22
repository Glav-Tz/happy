/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Header.module.scss';

import { ReactComponent as LogoIcon } from '../../../assets/icon/logo.svg';
import { ReactComponent as WhatsAppIcon } from '../../../assets/icon/messengers/color/wa.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/icon/phone.svg';

const openWhatsApp = (e: React.SyntheticEvent) => {
  e.preventDefault();

  window.open(
    'https://api.whatsapp.com/send/?phone=79881499490&text&type=phone_number&app_absent=0',
  );
};

const Header = () => {
  return (
    <div className={`${styles.wrapperSticky} ${styles.container}`}>
      <header className={`${styles.header} ${styles.container}`}>
        <div className={styles.socialNetwork}>
          <WhatsAppIcon className={styles.WhatsAppIcon} />
          <a onClick={openWhatsApp} className={styles.socialIcon} href="#">
            <span className={styles.socialIconText}>Написать WhatsApp</span>
            <span className={styles.socialIconTextMin}>WhatsApp</span>
          </a>
        </div>
        <nav className={styles.navigate}>
          <div className={styles.navigateBlocks}>
            <a className={styles.navigateBlocks__link} href="#main-screen">
              Наши герои
            </a>
            <a
              className={styles.navigateBlocks__link}
              href="#shows-and-masterclasses"
            >
              Шоу и мастерклассы
            </a>
            <a className={styles.navigateBlocks__link} href="#about-our-team">
              О нас
            </a>
          </div>

          <LogoIcon className={styles.logo} />

          <div className={styles.navigateBlocks}>
            <a
              className={styles.navigateBlocks__link}
              href="#collection-videos"
            >
              Видео с праздников
            </a>
            <a className={styles.navigateBlocks__link} href="#reviews">
              Отзывы
            </a>
            <a className={styles.navigateBlocks__link} href="#contacts">
              Контакты
            </a>
          </div>
        </nav>

        <div className={styles.contactPhone}>
          <PhoneIcon className={styles.phoneIcon} />
          <a className={styles.phoneText} href="tel: +79881499490">
            +7 988 149-94-90
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
