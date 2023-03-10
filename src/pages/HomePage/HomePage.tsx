import { useState } from 'react';

import CollectionVideos from 'components/UI/CollectionVideos';
import Reviews from 'components/UI/Reviews';
import Contacts from 'components/UI/Contacts';
import AboutOurTeam from '../../components/UI/AboutOurTeam';
import MainScreen from '../../components/UI/MainScreen';
import OurHeroes from '../../components/UI/OurHeroes';
import Activity from '../../components/UI/Activity';
import ModalCostCalculation from '../../components/UI/ModalCostCalculation';

const HomePage = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <MainScreen setIsActive={setIsActive} />
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
