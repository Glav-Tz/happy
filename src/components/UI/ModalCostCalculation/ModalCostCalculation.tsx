/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { Dispatch, SetStateAction, useEffect } from 'react';

import styles from './ModalCostCalculation.module.scss';

import { ReactComponent as CrossIcon } from '../../../assets/icon/cross.svg';

type Props = {
  setIsActive: Dispatch<SetStateAction<boolean>>;
};
const ModalCostCalculation = ({ setIsActive }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'scroll';
    };
  });

  return (
    <div onClick={() => setIsActive(false)} className={styles.blackout}>
      <div
        onClick={(event) => event.stopPropagation()}
        className={styles.modalCostCalculation}
      >
        <div className={styles.wrapperTitle}>
          <h3 className={styles.title}>Немного обо мне</h3>
          <CrossIcon
            className={styles.crossIcon}
            onClick={() => setIsActive(false)}
          />
        </div>
        <video className={styles.video} controls muted loop>
          <source
            src={require(`../../../assets/videos/video_1.mp4`)}
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default ModalCostCalculation;
