/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useRef, useState, RefObject } from 'react';

import ButtonVideo from '../ButtonVideo';
import styles from './VideoElement.module.scss';

type Props = {
  nameVideo: string;
};

const VideoElement = ({ nameVideo }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlayer, setIsPlayer] = useState(false);

  const videoManagement = (videoLink: RefObject<HTMLVideoElement>) => {
    if (videoLink.current?.paused === true) {
      videoLink.current?.play();
    } else {
      videoLink.current?.pause();
    }
  };

  return (
    <div className={styles.videoWrapper}>
      <div
        onClick={() => {
          videoManagement(videoRef);
          setIsPlayer((prev) => !prev);
        }}
        className={isPlayer ? styles.backgroundHide : styles.backgroundShow}
      />
      <ButtonVideo
        onClick={() => {
          videoManagement(videoRef);
          setIsPlayer((prev) => !prev);
        }}
        className={isPlayer ? styles.dtnVideoHide : styles.dtnVideoShow}
      />
      <video ref={videoRef} className={styles.videoShorts} muted loop>
        <source
          src={require(`../../../../assets/videos/shorts/${nameVideo}.mp4`)}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoElement;
