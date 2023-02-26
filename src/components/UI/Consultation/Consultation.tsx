/* eslint-disable global-require */
import { SyntheticEvent, useState } from 'react';
import styles from './Consultation.module.scss';

import { ReactComponent as TelegramIcon } from '../../../assets/icon/messengers/color/te.svg';
import { ReactComponent as WhatsAppIcon } from '../../../assets/icon/messengers/color/wa.svg';
import Button from '../Button';

const handleSubmit = (event: SyntheticEvent) => {
  console.log('ушло в небытье');
  event.preventDefault();
};

const Consultation = () => {
  const [phone, setPhone] = useState('');

  return (
    <section className={styles.consultation}>
      <img
        className={styles.foto}
        src={require('../../../assets/img/photosEmployees/consultationFoto.png')}
        alt="foto consultant"
      />

      <div className={styles.description}>
        <h1 className={styles.annotationHeader}>Нужна консультация?</h1>
        <div className={styles.annotation}>
          Позвоните нам по номеру <strong>+7 988 149-94-90</strong>, напишите в
          удобный Вам мессенджер или оставьте свой номер, чтобы мы сами Вам
          перезвонили ;)
        </div>
        <div className={styles.feedback}>
          <form className={styles.phoneWrapper} onSubmit={handleSubmit}>
            <label htmlFor="phone">
              <input
                className={styles.phone}
                type="tel"
                id="phone"
                value={phone}
                onChange={(event) => setPhone(event.currentTarget.value)}
                placeholder="+7(___)___-__-__"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}[0-9]{2}"
              />
            </label>
            <input
              className={styles.dtnPhone}
              type="submit"
              value="Отправить"
            />
          </form>
          <div className={styles.dtnWrapper}>
            <Button className={styles.messengersWatsApp}>
              <WhatsAppIcon className={styles.svgWatsApp} />
              WhatsApp
            </Button>
            <Button className={styles.messengersTelegram}>
              <TelegramIcon className={styles.svgTelegram} />
              Telegram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
