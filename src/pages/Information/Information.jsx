import { useTranslation } from 'react-i18next';

export const Information = () => {
  const { t } = useTranslation();

  return (
    <h1>{t('information')}</h1>
  );
};
