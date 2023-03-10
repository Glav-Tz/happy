/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import styles from './OurHeroes.module.scss';
import { hero, categories } from './data';
import ButtonHero from './components';

const OurHeroes = () => {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <section className={`${styles.ourHeroes} ${styles.container}`}>
      <h1 className={styles.descHeader}>Наши герои</h1>
      <nav className={styles.navigate}>
        {categories.map((element) => {
          const { nameCategories, idCategories } = element;
          return (
            <ButtonHero
              key={idCategories}
              id={idCategories}
              value={nameCategories}
              setActiveButton={setActiveButton}
              isActive={activeButton === idCategories}
            />
          );
        })}
      </nav>

      <div className={styles.heroesWrapper}>
        {hero.map((element, index) => {
          const { imgCharacter, characterName, descShow, consistsOfGroups } =
            element;
          return (
            consistsOfGroups.includes(activeButton) && (
              <div key={index} className={styles.hero}>
                <img
                  className={styles.hero__img}
                  src={require(`../../../assets/img/heroCard/${imgCharacter}.png`)}
                  alt="hero costume"
                />

                <div className={styles.hero__descWrap}>
                  <span className={styles.hero__name}>{characterName}</span>
                  <span className={styles.hero__descShow}>{descShow}</span>
                </div>
              </div>
            )
          );
        })}
      </div>
    </section>
  );
};

export default OurHeroes;
