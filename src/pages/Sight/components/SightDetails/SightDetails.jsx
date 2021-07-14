// import { useTranslation } from 'react-i18next';
import {
  useParams, useHistory,
} from 'react-router-dom';
import { data } from '@assets/sight';
import { AudioPlayer, Carousel } from '@components';
import styles from './SightDetails.module.css';

export const SightDetails = () => {
  // const { t } = useTranslation();
  const { title } = useParams();
  const history = useHistory();

  const [element] = data.filter((item) => item.title === title);
  const {
    details: {
      status, owner, address, period, territory, year, description,
    },
  } = element;

  return (
    <div className="sight-details">
      {/* <h1>{t('settingsPage.settings')}</h1> */}
      <div onClick={() => history.push('/sight')} className={styles.arrow}>&#8701;</div>
      <h1>{element.title}</h1>
      <AudioPlayer />
      <Carousel img={element.img} title={element.title} />
      <div className={styles.inner}>
        <div className={styles.layoutTwoColumn}>
          <div>
            <p className={styles.title}>Статус объекта</p>
            <p className={styles.subtitle}>{status}</p>
          </div>
          <div>
            <p className={styles.title}>Собственник</p>
            <p className={styles.subtitle}>{owner}</p>
          </div>
        </div>
        <div className={styles.layoutTwoColumn}>
          <div>
            <p className={styles.title}>Адрес</p>
            <p className={styles.subtitle}>{address}</p>
          </div>
          <div>
            <p className={styles.title}>Период</p>
            <p className={styles.subtitle}>{period}</p>
          </div>
        </div>
        <div className={styles.layoutTwoColumn}>
          <div>
            <p className={styles.title}>Территория</p>
            <p className={styles.subtitle}>{territory}</p>
          </div>
          <div>
            <p className={styles.title}>Год</p>
            <p className={styles.subtitle}>{year}</p>
          </div>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
