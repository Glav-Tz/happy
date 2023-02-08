import styles from './WeAreTouch.module.scss';

import { ReactComponent as TelegramIcon } from '../../../assets/icon/color/te.svg';
import { ReactComponent as WhatsAppIcon } from '../../../assets/icon/color/wa.svg';
import { ReactComponent as VkontacteIcon } from '../../../assets/icon/color/vk.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/icon/color/inst.svg';
import Button from '../Button';

const WeAreTouch = () => {
  return (
    <section className={styles.weAreTouch}>
      <div className={styles.title}>Мы на связи!</div>
      <div className={styles.wrapperSocialNetwork}>
        <Button className={styles.messengersWatsApp}>
          <WhatsAppIcon className={styles.svgWatsApp} />
          WhatsApp
        </Button>
        <Button className={styles.messengersTelegram}>
          <TelegramIcon className={styles.svgTelegram} />
          Telegram
        </Button>
        <Button className={styles.messengersVkontacte}>
          <VkontacteIcon className={styles.svgVkontacte} />
        </Button>
        <Button className={styles.messengersInstagram}>
          <InstagramIcon className={styles.svgInstagram} />
        </Button>
      </div>
    </section>
  );
};

export default WeAreTouch;
