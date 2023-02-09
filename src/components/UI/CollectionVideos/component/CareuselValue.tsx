import styles from './CareuselValue.module.scss';

type Props = {
  text: string;
};

const CareuselValue = ({ text }: Props) => {
  return <div className={styles.video}>{text}</div>;
};

export default CareuselValue;
