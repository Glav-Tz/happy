import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import { ReactComponent as InstagramIcon } from '../../../assets/icon/messengers/color/inst.svg';
import { ReactComponent as TelegramIcon } from '../../../assets/icon/messengers/color/te.svg';
import { ReactComponent as VkontacteIcon } from '../../../assets/icon/messengers/color/vk.svg';
import { ReactComponent as WhatsAppIcon } from '../../../assets/icon/messengers/color/wa.svg';
import Button from '../Button';
import styles from './WeAreTouch.module.scss';

type Props = {
  className?: string;
  setIsActiveCheck: React.Dispatch<React.SetStateAction<boolean>>;
};

const openWhatsApp = (e: React.SyntheticEvent) => {
  e.preventDefault();

  window.open(
    'https://api.whatsapp.com/send/?phone=79881499490&text&type=phone_number&app_absent=0',
  );
};

const openTelegram = (e: React.SyntheticEvent) => {
  e.preventDefault();

  window.open('https://t.me/animatory_tuapse');
};

const openVkontacte = (e: React.SyntheticEvent) => {
  e.preventDefault();

  window.open(
    'https://vk.com/animatory_tuapse?trackcode=bf292649MCnj3f9yuMtR_A_YF6QfmKey1VYwIpxI6UX-fn5t67yESC9jYn_Vskb0FNckqhSrlajlWDI6n1TzRe90IRmK',
  );
};

const openInstagram = (e: React.SyntheticEvent) => {
  e.preventDefault();

  window.open(
    'https://www.instagram.com/invites/contact/?i=125jwlq6n25ef&utm_content=zm2y7v',
  );
};

const WeAreTouch = ({ className, setIsActiveCheck }: Props) => {
  const [mail, setMail] = useState('');
  const [requestText, setRequestText] = useState('');
  const externalClasses = [styles.weAreTouch, className];

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_85ria8h',
          'template_k1dc9ik',
          formRef.current,
          'NuEY2PqJQTgTiz2fx',
        )
        .then(
          (result) => {
            if (result.status === 200) {
              setIsActiveCheck(true);
              formRef.current?.reset();
            }
          },
          (error) => {
            if (error.text) {
              alert('Попробуйте ещё раз');
            }
          },
        );
    }
  };

  return (
    <form
      ref={formRef}
      className={externalClasses.join(' ')}
      onSubmit={handleSubmit}
    >
      <div className={styles.title}>Мы на связи!</div>
      <div className={styles.wrapperSocialNetwork}>
        <Button onClick={openWhatsApp} className={styles.messengersWatsApp}>
          <WhatsAppIcon className={styles.svgWatsApp} />
          WhatsApp
        </Button>
        <Button onClick={openTelegram} className={styles.messengersTelegram}>
          <TelegramIcon className={styles.svgTelegram} />
          Telegram
        </Button>
        <Button onClick={openVkontacte} className={styles.messengersVkontacte}>
          <VkontacteIcon className={styles.svgVkontacte} />
        </Button>
        <Button onClick={openInstagram} className={styles.messengersInstagram}>
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
          placeholder="Телефон"
          name="email"
        />
      </label>

      <label htmlFor="requestText">
        <textarea
          className={styles.requestText}
          id="requestText"
          value={requestText}
          onChange={(event) => setRequestText(event.currentTarget.value)}
          placeholder="Комментарий"
          name="massage"
        />
      </label>

      <input className={styles.btnSubmit} type="submit" value="Отправить" />
    </form>
  );
};

export default WeAreTouch;
