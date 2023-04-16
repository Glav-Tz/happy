/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { useState } from 'react';
import Button from '../Button';
import styles from './SliderTeam.module.scss';

import sliderTeamData from './data';

import { ReactComponent as PlayIcon } from '../../../assets/icon/play.svg';

import { ReactComponent as LeftArrow } from '../../../assets/icon/arrow/left_arrow.svg';
import { ReactComponent as RightArrow } from '../../../assets/icon/arrow/right_arrow.svg';

const SliderTeam = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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

        // const obj = {
        //   employeeTitleName: '1',
        //   employeeTitlePost: '1',
        //   employeeDesc: '1',
        // };
        //
        // setTimeout(
        //   () => ({
        //     ...obj,
        //     employeeTitleName,
        //     employeeTitlePost,
        //     employeeDesc,
        //   }),
        //   1500,
        // );

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
                <Button className={styles.employeeBtn}>
                  <PlayIcon className={styles.employeeBtn_icon} />
                  Видео обо мне
                </Button>
              </div>
              <div className={styles.sliderTeam__mainSlide}>
                <div className={styles.wrapperEmployeeMainSlide}>
                  <img
                    className={styles.employeeMainSlide}
                    src={require(`../../../assets/img/sliderTeam/${mainSlide}.png`)}
                    alt="employee img"
                  />
                  <img
                    className={styles.employeeSecondarySlide}
                    src={require(`../../../assets/img/sliderTeam/${secondarySlide}.png`)}
                    alt="employee img"
                  />
                  <img
                    className={styles.employeeThumbnailSlide}
                    src={require(`../../../assets/img/sliderTeam/${thumbnailSlide}.png`)}
                    alt="employee img"
                  />
                </div>

                <div className={styles.wrapperMainSlideBtn}>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      setCurrentSlide((prevState) => prevState - 1);
                    }}
                    className={styles.mainSlideBtn}
                    type="button"
                  >
                    <LeftArrow />
                  </button>

                  <button
                    onClick={() => {
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
