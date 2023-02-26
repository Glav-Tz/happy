/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import dataOfCarusel from './data';
import styles from './CollectionVideos.module.scss';

const CollectionVideos = () => {
  return (
    <section className={`${styles.collectionVideos} ${styles.container}`}>
      <h1 className={styles.title}>Видео с праздинков</h1>

      <div className={styles.sliderVideo}>
        {dataOfCarusel.map((element) => {
          const { nameVideo } = element;
          return (
            <video className={styles.videoShorts} muted loop controls>
              <source
                src={require(`../../../assets/videos/shorts/${nameVideo}.mp4`)}
                type="video/mp4"
              />
            </video>
          );
        })}
      </div>
    </section>
  );
};

export default CollectionVideos;
