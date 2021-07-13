import { useTranslation } from 'react-i18next';

export const Sight = () => {
  const { t } = useTranslation();

  return (
    <h1>{t('sightPage.sight')}</h1>
  );
};
