import { useTranslation } from 'react-i18next';

export const Map = () => {
  const { t } = useTranslation();

  return (
    <h1>{t('map')}</h1>
  );
};
