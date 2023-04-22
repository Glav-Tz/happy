import { useState } from 'react';
import MainScreen from '../../components/UI/MainScreen';
import OurHeroes from '../../components/UI/OurHeroes';
import Activity from '../../components/UI/Activity';
import CollectionVideos from '../../components/UI/CollectionVideos';
import AboutOurTeam from '../../components/UI/AboutOurTeam';
import Reviews from '../../components/UI/Reviews';
import Contacts from '../../components/UI/Contacts';
import ModalCostCalculation from '../../components/UI/ModalCostCalculation';

const HomePage = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <MainScreen />
      <OurHeroes />
      <Activity />
      <AboutOurTeam />
      <CollectionVideos />
      <Reviews />
      <Contacts />
      {isActive && <ModalCostCalculation setIsActive={setIsActive} />}
    </>
  );
};

export default HomePage;
