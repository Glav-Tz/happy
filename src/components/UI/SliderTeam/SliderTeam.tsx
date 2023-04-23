/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { useState } from 'react';
import Button from '../Button';
import styles from './SliderTeam.module.scss';

import sliderTeamData from './data';

import { ReactComponent as PlayIcon } from '../../../assets/icon/play.svg';

import { ReactComponent as LeftArrow } from '../../../assets/icon/arrow/left_arrow.svg';
import { ReactComponent as RightArrow } from '../../../assets/icon/arrow/right_arrow.svg';

type Props = {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const SliderTeam = ({ setIsActive }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [reverseSlide, setReverseSlide] = useState(false);
  const [maxSlideElement] = useState(sliderTeamData.length - 1);

  return (
    <>
      {sliderTeamData.map((element) => {
        const {
          id,
          employeeTitleName,
          employeeTitlePost,
          employeeDesc,
          mainSlide,
          secondarySlide,
          thumbnailSlide,
        } = element;

        return (
          id === currentSlide && (
            <div key={id} className={styles.sliderTeam}>
              <div className={styles.sliderTeam__description}>
                <div className={styles.employeeTitleName}>
                  {employeeTitleName}
                </div>
                <div className={styles.employeeTitlePost}>
                  {employeeTitlePost}
                </div>
                <div className={styles.employeeDesc}>{employeeDesc}</div>
                <Button
                  onClick={() => setIsActive((prevState) => !prevState)}
                  className={styles.employeeBtn}
                >
                  <PlayIcon className={styles.employeeBtn_icon} />
                  Видео обо мне
                </Button>
              </div>
              <div className={styles.sliderTeam__mainSlide}>
                <div className={styles.wrapperEmployeeMainSlide}>
                  <img
                    className={
                      reverseSlide
                        ? styles.employeeMainSlideReverse
                        : styles.employeeMainSlide
                    }
                    src={
                      reverseSlide
                        ? require(`../../../assets/img/sliderTeam/slide_${
                            mainSlide + 1
                          }.png`)
                        : require(`../../../assets/img/sliderTeam/slide_${mainSlide}.png`)
                    }
                    alt="employee img"
                  />
                  <img
                    className={
                      reverseSlide
                        ? styles.employeeSecondarySlideReverse
                        : styles.employeeSecondarySlide
                    }
                    src={
                      reverseSlide
                        ? require(`../../../assets/img/sliderTeam/slide_${
                            secondarySlide + 1
                          }.png`)
                        : require(`../../../assets/img/sliderTeam/slide_${secondarySlide}.png`)
                    }
                    alt="employee img"
                  />
                  <img
                    className={
                      reverseSlide
                        ? styles.employeeThumbnailSlideReverse
                        : styles.employeeThumbnailSlide
                    }
                    src={
                      reverseSlide
                        ? require(`../../../assets/img/sliderTeam/slide_${
                            thumbnailSlide + 1
                          }.png`)
                        : require(`../../../assets/img/sliderTeam/slide_${thumbnailSlide}.png`)
                    }
                    alt="employee img"
                  />
                </div>

                <div className={styles.wrapperMainSlideBtn}>
                  <button
                    onClick={() => {
                      if (currentSlide !== 0) {
                        setReverseSlide(true);
                        setCurrentSlide((prevState) => prevState - 1);
                      }
                    }}
                    className={styles.mainSlideBtn}
                    type="button"
                  >
                    <LeftArrow />
                  </button>

                  <button
                    onClick={() => {
                      setReverseSlide(false);
                      if (currentSlide !== maxSlideElement) {
                        setCurrentSlide((prevState) => prevState + 1);
                      }
                    }}
                    className={styles.mainSlideBtn}
                    type="button"
                  >
                    <RightArrow />
                  </button>
                </div>
              </div>
            </div>
          )
        );
      })}
    </>
  );
};

export default SliderTeam;
