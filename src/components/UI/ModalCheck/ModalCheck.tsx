/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { Dispatch, SetStateAction, useEffect } from 'react';
import Button from '../Button';

import styles from './ModalCheck.module.scss';

type Props = {
  setIsActiveCheck: Dispatch<SetStateAction<boolean>>;
};

const ModalCheck = ({ setIsActiveCheck }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'scroll';
    };
  });

  return (
    <div onClick={() => setIsActiveCheck(false)} className={styles.blackout}>
      <div
        onClick={(event) => event.stopPropagation()}
        className={styles.modalModalCheck}
      >
        <h3 className={styles.title}>Ваше сообщение успешно отправлено!</h3>

        <p className={styles.text}>Мы свяжемся с Вами в ближайшее время :)</p>
        <Button
          className={styles.btnCheck}
          onClick={() => setIsActiveCheck(false)}
        >
          OK
        </Button>
      </div>
    </div>
  );
};

export default ModalCheck;
