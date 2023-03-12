/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Dispatch, SetStateAction } from 'react';

import styles from './ModalCostCalculation.module.scss';

import { ReactComponent as CrossIcon } from '../../../assets/icon/cross.svg';

type Props = {
  setIsActive: Dispatch<SetStateAction<boolean>>;
};
const ModalCostCalculation = ({ setIsActive }: Props) => {
  return (
    <div onClick={() => setIsActive(false)} className={styles.blackout}>
      <div
        onClick={(event) => event.stopPropagation()}
        className={styles.modalCostCalculation}
      >
        <div className={styles.wrapperTitle}>
          <h4 className={styles.title}>Узнайте стоимость вашего отдыха</h4>
          <CrossIcon
            className={styles.crossIcon}
            onClick={() => setIsActive(false)}
          />
        </div>
        <p className={styles.description}>
          Требуется дизайнер, опыт работы за `Спасибо` приветсвуется. P.s.
          `Спасибо` не от СберБанка
        </p>
      </div>
    </div>
  );
};

export default ModalCostCalculation;
