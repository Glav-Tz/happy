import { useState } from 'react';
import AboutOurTeam from '../../components/UI/AboutOurTeam';
import Activity from '../../components/UI/Activity';
import CollectionVideos from '../../components/UI/CollectionVideos';
import Contacts from '../../components/UI/Contacts';
import MainScreen from '../../components/UI/MainScreen';
import ModalCostCalculation from '../../components/UI/ModalCostCalculation';
import ModalCheck from '../../components/UI/ModalCheck';
import OurHeroes from '../../components/UI/OurHeroes';
import Reviews from '../../components/UI/Reviews';

const HomePage = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveCheck, setIsActiveCheck] = useState(false);

  return (
    <>
      <MainScreen />
      <OurHeroes />
      <Activity setIsActiveCheck={setIsActiveCheck} />
      <AboutOurTeam setIsActive={setIsActive} />
      <CollectionVideos />
      <Reviews />
      <Contacts setIsActiveCheck={setIsActiveCheck} />
      {isActive && <ModalCostCalculation setIsActive={setIsActive} />}
      {isActiveCheck && <ModalCheck setIsActiveCheck={setIsActiveCheck} />}
    </>
  );
};

export default HomePage;
