import { useTranslation } from 'react-i18next';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('notFoundPage.not_found')}</h1>
    </>
  );
};
