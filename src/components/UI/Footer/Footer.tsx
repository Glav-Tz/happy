/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Footer.module.scss';

import { ReactComponent as VkIcon } from '../../../assets/icon/messengers/vk.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/icon/messengers/inst.svg';
import { ReactComponent as TelegramIcon } from '../../../assets/icon/messengers/tele.svg';
import { ReactComponent as WhatsAppIcon } from '../../../assets/icon/messengers/wa.svg';

const Footer = () => {
  return (
    <footer className={`${styles.footer} ${styles.container}`}>
      <div className={styles.copyright}>
        ИП Сидоренко ИНН ОГРН <br />
        “Индустрия Праздника” 2023 (С) Все права защищены.
      </div>
      <a className={styles.privacyPolicy} href="#">
        Политика конфиденциальности
      </a>
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
    </footer>
  );
};

export default Footer;
