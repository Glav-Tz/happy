/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { MouseEventHandler } from 'react';
import styles from './ButtonVideo.module.scss';
import { ReactComponent as PlayIcon } from '../../../../assets/icon/play.svg';

type Props = {
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
};

const ButtonVideo = ({ onClick, className }: Props) => {
  const cardClasses = [styles.btnVideo, className];
  return (
    <div onClick={onClick} className={cardClasses.join(' ')}>
      <PlayIcon className={styles.btnVideoIcon} />
    </div>
  );
};

export default ButtonVideo;
