import { SyntheticEvent, useState } from 'react';

import { ReactComponent as TelegramIcon } from '../../../assets/icon/color/te.svg';
import { ReactComponent as WhatsAppIcon } from '../../../assets/icon/color/wa.svg';
import { ReactComponent as VkontacteIcon } from '../../../assets/icon/color/vk.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/icon/color/inst.svg';
import Button from '../Button';
import styles from './WeAreTouch.module.scss';

const handleSubmit = (event: SyntheticEvent) => {
  console.log('ушло в небытье');
  event.preventDefault();
};

const WeAreTouch = () => {
  const [mail, setMail] = useState('');
  const [requestText, setRequestText] = useState('');

  return (
    <form className={styles.weAreTouch} onSubmit={handleSubmit}>
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

      <label htmlFor="email">
        <input
          className={styles.email}
          type="email"
          id="email"
          value={mail}
          onChange={(event) => setMail(event.currentTarget.value)}
          placeholder="Ваш email"
        />
      </label>

      <label htmlFor="requestText">
        <textarea
          className={styles.requestText}
          id="requestText"
          value={requestText}
          onChange={(event) => setRequestText(event.currentTarget.value)}
          placeholder="Ваш вопрос"
        />
      </label>

      <input className={styles.btnSubmit} type="submit" value="Отправить" />
    </form>
  );
};

export default WeAreTouch;
