import { useTranslation } from 'react-i18next';
import { AudioPlayer } from '../../components/AudioPlayer';
// import styles from './Map.module.css';

export const Map = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('mapPage.map')}</h1>
      <AudioPlayer />
    </>
  );
};
