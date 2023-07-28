/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { useEffect } from 'react';
import Button from '../Button';

import styles from './ModalCheck.module.scss';

type Props = {
  setIsActiveCheckPhone: React.Dispatch<React.SetStateAction<boolean>>;
  setIsActiveCheckMessage: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalCheck = ({
  setIsActiveCheckPhone,
  setIsActiveCheckMessage,
}: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'scroll';
    };
  });

  return (
    <div
      onClick={() => {
        setIsActiveCheckPhone(false);
        setIsActiveCheckMessage(false);
      }}
      className={styles.blackout}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={styles.modalModalCheck}
      >
        <h3 className={styles.title}>Ваше сообщение успешно отправлено!</h3>

        <p className={styles.text}>Мы свяжемся с Вами в ближайшее время :)</p>
        <Button
          className={styles.btnCheck}
          onClick={() => {
            setIsActiveCheckPhone(false);
            setIsActiveCheckMessage(false);
          }}
        >
          OK
        </Button>
      </div>
    </div>
  );
};

export default ModalCheck;
