/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Footer.module.scss';

import { ReactComponent as InstagramIcon } from '../../../assets/icon/messengers/inst.svg';
import { ReactComponent as TelegramIcon } from '../../../assets/icon/messengers/tele.svg';
import { ReactComponent as VkIcon } from '../../../assets/icon/messengers/vk.svg';
import { ReactComponent as WhatsAppIcon } from '../../../assets/icon/messengers/wa.svg';

const Footer = () => {
  return (
    <footer className={`${styles.footer} ${styles.container}`}>
      <div className={styles.copyright}>
        “Искусство праздника” 2023 (С) Все права защищены.
      </div>
      <a className={styles.privacyPolicy} href="#">
        Политика конфиденциальности
      </a>
      <div className={styles.socialNetwork}>
        <a className={styles.socialIcon} href="#">
          <VkIcon className={styles.vkIcon} />
        </a>
        <a className={styles.socialIcon} href="#">
          <InstagramIcon className={styles.instagramIcon} />
        </a>
        <a className={styles.socialIcon} href="#">
          <TelegramIcon className={styles.telegramIcon} />
        </a>
        <a className={styles.socialIcon} href="#">
          <WhatsAppIcon className={styles.whatsAppIcon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
