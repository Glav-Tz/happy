/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './OurHeroes.module.scss';
import { heros, BASE_IMG_URL } from './data';

const OurHeroes = () => {
  return (
    <section className={`${styles.ourHeroes} ${styles.container}`}>
      <h1 className={styles.descHeader}>Наши герои</h1>
      <nav className={styles.navigate}>
        <ul className={styles.navigate__ul}>
          <li>
            <a className={styles.navigate__link} href="#">
              Популярное
            </a>
          </li>
          <li>
            <a className={styles.navigate__link} href="#">
              Подросткам
            </a>
          </li>
          <li>
            <a className={styles.navigate__link} href="#">
              Мульт-герои
            </a>
          </li>
          <li>
            <a className={styles.navigate__link} href="#">
              Герои игр
            </a>
          </li>
          <li>
            <a className={styles.navigate__link} href="#">
              Супергерои
            </a>
          </li>
          <li>
            <a className={styles.navigate__link} href="#">
              Универсальное
            </a>
          </li>
          <li>
            <a className={styles.navigate__link} href="#">
              Принцессы
            </a>
          </li>
          <li>
            <a className={styles.navigate__link} href="#">
              Куклы
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.herosWrapper}>
        {heros.map((element) => {
          const { background, imgCharacter, characterName, universe } = element;
          return (
            <div className={styles.hero}>
              <div
                style={{ backgroundColor: `${background}` }}
                className={styles.hero__base}
              >
                <img
                  className={styles.hero__base__img}
                  src={`${BASE_IMG_URL}${imgCharacter}`}
                  alt="hero costume"
                />
              </div>
              <div className={styles.hero__descWrap}>
                <span className={styles.hero__name}>{characterName}</span>
                <span className={styles.hero__universe}>{universe}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurHeroes;
