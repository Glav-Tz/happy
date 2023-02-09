import WeAreTouch from '../WeAreTouch';
import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <section className={`${styles.reviews} ${styles.container}`}>
      <div className={styles.title}>Наши контакты</div>
      <div className={styles.desc}>
        Можете связаться с нами по номеру <strong>+7 988 149-94-90</strong>,
        написать в удобный Вам мессенджер или оставить свой номер, чтобы мы сами
        Вам перезвонили ;)
      </div>
      <WeAreTouch />
    </section>
  );
};

export default Contacts;
