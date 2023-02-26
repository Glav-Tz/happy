/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './OurHeroes.module.scss';
import { heros, categories } from './data';

const OurHeroes = () => {
  return (
    <section className={`${styles.ourHeroes} ${styles.container}`}>
      <h1 className={styles.descHeader}>Наши герои</h1>
      <nav className={styles.navigate}>
        {categories.map((element) => {
          const { nameCategories, idCategories } = element;
          return (
            <a key={idCategories} className={styles.navigate__link} href="#">
              {nameCategories}
            </a>
          );
        })}
      </nav>

      <div className={styles.herosWrapper}>
        {heros.map((element, index) => {
          const { imgCharacter, characterName, descrShow } = element;
          return (
            <div key={index} className={styles.hero}>
              <img
                className={styles.hero__img}
                src={require(`../../../assets/img/heroCard/${imgCharacter}.png`)}
                alt="hero costume"
              />

              <div className={styles.hero__descWrap}>
                <span className={styles.hero__name}>{characterName}</span>
                <span className={styles.hero__descrShow}>{descrShow}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurHeroes;
