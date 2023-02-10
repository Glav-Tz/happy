import styles from './CareuselValue.module.scss';

type Props = {
  text: string;
};

const CareuselValue = ({ text }: Props) => {
  return (
    <div className={styles.wrapperVideo}>
      <div className={styles.video}>{text}</div>
    </div>
  );
};

export default CareuselValue;
