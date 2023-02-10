import styles from './CareuselValue.module.scss';

type Props = {
  bgColor: string;
};

const CareuselValue = ({ bgColor }: Props) => {
  return (
    <div className={styles.wrapperFotoTeam}>
      <div
        style={{ backgroundColor: `${bgColor}` }}
        className={styles.foroTeam}
      />
    </div>
  );
};

export default CareuselValue;
