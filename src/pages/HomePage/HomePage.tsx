import { useState } from 'react';
import AboutOurTeam from '../../components/UI/AboutOurTeam';
import Activity from '../../components/UI/Activity';
import CollectionVideos from '../../components/UI/CollectionVideos';
import Contacts from '../../components/UI/Contacts';
import MainScreen from '../../components/UI/MainScreen';
import ModalCostCalculation from '../../components/UI/ModalCostCalculation';
import OurHeroes from '../../components/UI/OurHeroes';
import Reviews from '../../components/UI/Reviews';

const HomePage = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <MainScreen />
      <OurHeroes />
      <Activity />
      <AboutOurTeam setIsActive={setIsActive} />
      <CollectionVideos />
      <Reviews />
      <Contacts />
      {isActive && <ModalCostCalculation setIsActive={setIsActive} />}
    </>
  );
};

export default HomePage;
