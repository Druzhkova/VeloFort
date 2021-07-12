import { useTranslation } from 'react-i18next';
import { Dropdown } from '../../components';
import styles from './Settings.module.css';

export const Settings = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('settings')}</h1>
      <Dropdown />
      <div className={styles.inner}>
        <h2 className={styles.title}>Оффлайн Аудиогид</h2>
        <p>Позволяет загрузить необходимые файлы для прослушивания без подключения к интернету</p>
        <div className={styles.button}>Загрузить</div>
      </div>
      <div className={styles.inner}>
        <h2 className={styles.title}>Скачать трек</h2>
        <p>Маршрут содержит контрольные точки, полезную информацию об исторических объектах и всего, что вам понадобиться в пути</p>
        <div className={styles.button}>Скачать трек</div>
        <div className={styles.buttonWhite}>Скачать трек</div>
      </div>
    </>
  );
};
