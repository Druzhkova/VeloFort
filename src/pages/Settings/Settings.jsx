import { useTranslation } from 'react-i18next';
import { Dropdown, Button } from '../../components';
import styles from './Settings.module.css';

export const Settings = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('settingsPage.settings')}</h1>
      <Dropdown />
      <div className={styles.inner}>
        <h2 className={styles.title}>{t('settingsPage.offline_audioguide')}</h2>
        <p>{t('settingsPage.subtitle_offline_audioguide')}</p>
        <Button>{t('settingsPage.btn_download')}</Button>
      </div>
      <div className={styles.inner}>
        <h2 className={styles.title}>{t('settingsPage.download_track')}</h2>
        <p>{t('settingsPage.subtitle_download_track')}</p>
        <Button>{t('settingsPage.download_track')}</Button>
        <div className={styles.buttonWhite}>{t('settingsPage.how_to_use_file')}</div>
      </div>
    </>
  );
};
