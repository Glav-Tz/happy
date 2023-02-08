import CollectionVideos from 'components/UI/CollectionVideos';
import Reviews from 'components/UI/Reviews';
import Contacts from 'components/UI/Contacts';
import AboutOurTeam from '../../components/UI/AboutOurTeam';
import MainScreen from '../../components/UI/MainScreen';
import OurHeroes from '../../components/UI/OurHeroes';
import Activity from '../../components/UI/Activity';

const HomePage = () => {
  return (
    <>
      <MainScreen />
      <OurHeroes />
      <Activity />
      <AboutOurTeam />
      <CollectionVideos />
      <Reviews />
      <Contacts />
    </>
  );
};

export default HomePage;
