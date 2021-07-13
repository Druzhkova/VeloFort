import { useTranslation } from 'react-i18next';
import styles from './Item.module.css';
import { marker, timeline, watch } from '../../../../assets';

export const Item = ({
  img, title, time, distance,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <span className={styles.imgContainer}>
        <img className={styles.img} src={img} alt={title} />
      </span>
      <div className={styles.content}>
        <div className={styles.inner}>
          <img className={styles.marker} src={marker} alt="Marker" />
          <span className={styles.title}>{t(`sightObject.${title}.title`)}</span>
        </div>
        <div className={styles.inner}>
          <img className={styles.timeLine} src={timeline} alt="Timeline" />
          <span className={styles.distance}>
            {distance}
            км.
          </span>
        </div>
        <div className={styles.inner}>
          <img className={styles.watch} src={watch} alt="Watch" />
          <span className={styles.time}>
            {time}
            ч.
          </span>
        </div>

      </div>
    </div>
  );
};
