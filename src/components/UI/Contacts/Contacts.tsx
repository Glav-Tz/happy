import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import WeAreTouch from '../WeAreTouch';
import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <section id="contacts" className={`${styles.reviews} ${styles.container}`}>
      <div className={styles.title}>Наши контакты</div>
      <div className={styles.desc}>
        Можете связаться с нами по номеру <strong>+7 988 149-94-90</strong>,
        написать в удобный Вам мессенджер или оставить свой номер, чтобы мы сами
        Вам перезвонили ;)
      </div>
      <YMaps
        query={{
          lang: 'ru_RU',
          apikey: '8f3060b6-9fa0-4352-a831-bb0ed282249c',
        }}
      >
        <Map
          className={styles.map}
          defaultState={{
            center: [44.095237186399, 39.07548960021136],
            zoom: 18,
          }}
        >
          <Placemark
            modules={['geoObject.addon.balloon']}
            properties={{
              balloonContentHeader: 'Индустрия праздника',
              balloonContentBody: 'Устройте праздник Вашим детям',
              balloonContentFooter: 'Позвоните и мы посмешим к Вам',
            }}
            geometry={[44.095271980679804, 39.073402841597776]}
            options={{
              iconLayout: 'default#image',
              iconImageSize: [50, 50],
              iconImageHref:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Yandex_Maps_icon.svg/240px-Yandex_Maps_icon.svg.png',
              iconImageOffset: [-20, -30],
            }}
          />
        </Map>
      </YMaps>
      <WeAreTouch className={styles.coordinates} />
    </section>
  );
};

export default Contacts;
