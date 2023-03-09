/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import styles from './CollectionVideos.module.scss';
import dataOfCarusel from './data';

import VideoElement from './VideoElement';

const CollectionVideos = () => {
  return (
    <section
      id="collection-videos"
      className={`${styles.collectionVideos} ${styles.container}`}
    >
      <h1 className={styles.title}>Видео с праздинков</h1>

      <div className={styles.sliderVideo}>
        {dataOfCarusel.map((element, index) => {
          const { nameVideo } = element;
          return <VideoElement key={index} nameVideo={nameVideo} />;
        })}
      </div>
    </section>
  );
};

export default CollectionVideos;
