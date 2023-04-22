/* eslint-disable global-require */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { SyntheticEvent, useState } from 'react';

import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';

import styles from './Consultation.module.scss';

import { ReactComponent as TelegramIcon } from '../../../assets/icon/messengers/color/te.svg';
import { ReactComponent as WhatsAppIcon } from '../../../assets/icon/messengers/color/wa.svg';
import Button from '../Button';

const handleSubmit = (event: SyntheticEvent) => {
  console.log('ушло в небытье');
  event.preventDefault();
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
          Позвоните нам по номеру <strong>+7(988) 149-94-90</strong>, напишите в
          удобный Вам мессенджер или оставьте свой номер, чтобы мы сами Вам
          перезвонили ;)
        </div>
        <div className={styles.feedback}>
          <form className={styles.phoneWrapper} onSubmit={handleSubmit}>
            <label htmlFor="phone">
              <PhoneInput
                countryCodeEditable={false}
                specialLabel=""
                placeholder="+7 (___) ___ - __ - __"
                country="ru"
                disableDropdown
                value={phone}
                onChange={(value) => setPhone(value)}
                containerClass={styles.phone}
                inputClass={styles.phone_input}
                dropdownStyle={{ display: 'none' }}
              />
            </label>
            <input
              className={styles.dtnPhone}
              type="submit"
              value="Отправить"
            />
          </form>
          <div className={styles.dtnWrapper}>
            <Button onClick={openWhatsApp} className={styles.messengersWatsApp}>
              <WhatsAppIcon className={styles.svgWatsApp} />
              <span className={styles.svgWatsAppText}> WhatsApp</span>
            </Button>
            <Button
              onClick={openTelegram}
              className={styles.messengersTelegram}
            >
              <TelegramIcon className={styles.svgTelegram} />
              <span className={styles.svgTelegramText}>Telegram</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
