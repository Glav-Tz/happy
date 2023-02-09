import styles from './CareuselValue.module.scss';

type Props = {
  bgColor: string;
};

const CareuselValue = ({ bgColor }: Props) => {
  return (
    <div
      style={{ backgroundColor: `${bgColor}` }}
      className={styles.foroTeam}
    />
  );
};

export default CareuselValue;
