/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Header.module.scss';

import { ReactComponent as VkIcon } from '../../../assets/icon/messengers/vk.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/icon/messengers/inst.svg';
import { ReactComponent as TelegramIcon } from '../../../assets/icon/messengers/tele.svg';
import { ReactComponent as WhatsAppIcon } from '../../../assets/icon/messengers/wa.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/icon/phone.svg';
import { ReactComponent as Logo } from '../../../assets/icon/logo.svg';

const Header = () => {
  return (
    <header className={`${styles.header} ${styles.container}`}>
      <div className={styles.socialNetwork}>
        <a className={styles.socialIcon} href="#">
          <VkIcon />
        </a>
        <a className={styles.socialIcon} href="#">
          <InstagramIcon />
        </a>
        <a className={styles.socialIcon} href="#">
          <TelegramIcon />
        </a>
        <a className={styles.socialIcon} href="#">
          <WhatsAppIcon />
        </a>
      </div>

      <nav className={styles.navigate}>
        <div className={styles.navigateBlock_one}>
          <a className={styles.navigate__link} href="#">
            Наши герои
          </a>
          <a className={styles.navigate__link} href="#">
            Шоу и мастерклассы
          </a>
          <a className={styles.navigate__link} href="#">
            О нас
          </a>
        </div>

        <div className={styles.logo}>
          <Logo />
        </div>

        <div className={styles.navigateBlock_two}>
          <a className={styles.navigate__link} href="#">
            Видео с праздников
          </a>
          <a className={styles.navigate__link} href="#">
            Отзывы
          </a>
          <a className={styles.navigate__link} href="#">
            Контакты
          </a>
        </div>
      </nav>

      <div className={styles.contactPhone}>
        <div className={styles.phoneIcon}>
          <PhoneIcon />
        </div>
        <a className={styles.phoneText} href="tel: +79881499490">
          +7 (988) 149-94-90
        </a>
      </div>
    </header>
  );
};

export default Header;
