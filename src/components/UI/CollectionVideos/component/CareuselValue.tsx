/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import styles from './CareuselValue.module.scss';

type Props = {
  nameVideo: string;
};

const CareuselValue = ({ nameVideo }: Props) => {
  return (
    <video className={styles.videoShorts} muted loop>
      <source
        src={require(`../../../../assets/videos/shorts/${nameVideo}.mp4`)}
        type="video/mp4"
      />
    </video>
  );
};

export default CareuselValue;
