import { useTranslation } from 'react-i18next';
import styles from './Information.module.css';
import {
  schedule, arrow, lodging, food, cyclist, project,
} from '../../assets';

export const Information = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('information')}</h1>
      <div className={styles.news}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <img src={schedule} alt="Schedule" />
            <h2 className={styles.title}>Новости</h2>
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
            <h2 className={styles.title}>Проживание</h2>
          </div>
        </div>
        <div className={styles.food}>
          <div className={styles.content}>
            <img src={food} alt="Food" />
            <h2 className={styles.title}>Питание</h2>
          </div>
        </div>
      </div>
      <div className={styles.pharmacy}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <img src={cyclist} alt="Pharmacy" />
            <h2 className={styles.title}>Аптеки для велосипедиста</h2>
          </div>
          <div className={styles.arrow}>
            <img src={arrow} alt="Arrow" />
          </div>
        </div>
      </div>
      <div className={styles.path}>
        <div className={styles.pathInner}>
          <h2 className={styles.title}>Как пройти границу</h2>
          <div className={styles.arrow}>
            <img src={arrow} alt="Arrow" />
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.projectInner}>
          <div className={styles.content}>
            <img src={project} alt="About the project" />
            <h2 className={styles.title}>О проекте</h2>
          </div>
          <div className={styles.arrow}>
            <img src={arrow} alt="Arrow" />
          </div>
        </div>
      </div>
      <div className={styles.support}>
        <div className={styles.supportInner}>
          <h2 className={styles.title}>Поддержать проект</h2>
          <p>Даже +1 рубль говорит нам, что наша работа нужна и важна. Все это мы стараемся сделать бесплатным и доступным для вас!</p>
          <div className={styles.button}>Поддержать</div>
        </div>
      </div>
    </>
  );
};
