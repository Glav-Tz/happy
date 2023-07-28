import { useState } from 'react';
import AboutOurTeam from '../../components/UI/AboutOurTeam';
import Activity from '../../components/UI/Activity';
import CollectionVideos from '../../components/UI/CollectionVideos';
import Contacts from '../../components/UI/Contacts';
import MainScreen from '../../components/UI/MainScreen';
import ModalCheck from '../../components/UI/ModalCheck';
import ModalCostCalculation from '../../components/UI/ModalCostCalculation';
import OurHeroes from '../../components/UI/OurHeroes';
import Reviews from '../../components/UI/Reviews';

const HomePage = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveCheckPhone, setIsActiveCheckPhone] = useState(false);
  const [isActiveCheckMessage, setIsActiveCheckMessage] = useState(false);

  return (
    <>
      <MainScreen />
      <OurHeroes />
      <Activity
        isActiveCheckPhone={isActiveCheckPhone}
        setIsActiveCheckPhone={setIsActiveCheckPhone}
      />
      <AboutOurTeam setIsActive={setIsActive} />
      <CollectionVideos />
      <Reviews />
      <Contacts
        isActiveCheckMessage={isActiveCheckMessage}
        setIsActiveCheckMessage={setIsActiveCheckMessage}
      />
      {isActive && <ModalCostCalculation setIsActive={setIsActive} />}
      {(isActiveCheckPhone || isActiveCheckMessage) && (
        <ModalCheck
          setIsActiveCheckPhone={setIsActiveCheckPhone}
          setIsActiveCheckMessage={setIsActiveCheckMessage}
        />
      )}
    </>
  );
};

export default HomePage;
