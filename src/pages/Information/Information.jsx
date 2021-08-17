import { useTranslation } from 'react-i18next';
import {
  schedule, arrow, lodging, food, cyclist, project,
} from '@assets';
import { Button } from '@components';
import styles from './Information.module.css';

export const Information = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('informationPage.title')}</h1>
      <div className={styles.news}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <img src={schedule} alt="Schedule" />
            <h2 className={styles.title}>{t('informationPage.news')}</h2>
          </div>
          <div className={styles.arrow}>
            <img src={arrow} alt="Arrow" />
          </div>
        </div>
      </div>
      <div className={styles.layoutTwoColumn}>
        <div className={styles.lodging}>
          <div className={styles.content}>
            <img src={lodging} alt="Lodging" />
            <h2 className={styles.title}>{t('informationPage.lodging')}</h2>
          </div>
        </div>
        <div className={styles.food}>
          <div className={styles.content}>
            <img src={food} alt="Food" />
            <h2 className={styles.title}>{t('informationPage.food')}</h2>
          </div>
        </div>
      </div>
      <div className={styles.pharmacy}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <img src={cyclist} alt="Pharmacy" />
            <h2 className={styles.title}>{t('informationPage.pharmacy')}</h2>
          </div>
          <div className={styles.arrow}>
            <img src={arrow} alt="Arrow" />
          </div>
        </div>
      </div>
      <div className={styles.path}>
        <div className={styles.pathInner}>
          <h2 className={styles.title}>{t('informationPage.path')}</h2>
          <div className={styles.arrow}>
            <img src={arrow} alt="Arrow" />
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.projectInner}>
          <div className={styles.content}>
            <img src={project} alt="About the project" />
            <h2 className={styles.title}>{t('informationPage.about')}</h2>
          </div>
          <div className={styles.arrow}>
            <img src={arrow} alt="Arrow" />
          </div>
        </div>
      </div>
      <div className={styles.support}>
        <div className={styles.supportInner}>
          <h2 className={styles.title}>{t('informationPage.support_the_project')}</h2>
          <p>{t('informationPage.support_the_project_title')}</p>
          <Button>{t('informationPage.suppor')}</Button>
        </div>
      </div>
    </>
  );
};
