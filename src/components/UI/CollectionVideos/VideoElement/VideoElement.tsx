/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { RefObject, useEffect, useRef, useState } from 'react';

import ButtonVideo from '../ButtonVideo';
import styles from './VideoElement.module.scss';

type Props = {
  nameVideo: string;
  id: number;
  currentSlide: number;
};

const VideoElement = ({ nameVideo, id, currentSlide }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlayer, setIsPlayer] = useState(false);

  useEffect(() => {
    if (id !== currentSlide) {
      videoRef.current?.pause();
    }
  }, [currentSlide, id]);

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
        className={
          id === currentSlide ? styles.backgroundHide : styles.backgroundShow
        }
      />
      {!isPlayer && (
        <ButtonVideo
          onClick={() => {
            videoManagement(videoRef);
            setIsPlayer((prev) => !prev);
          }}
          className={
            id === currentSlide ? styles.dtnVideoShow : styles.dtnVideoHide
          }
        />
      )}
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
