import { useTranslation } from 'react-i18next';
import { Dropdown } from '../../components';

export const Settings = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('settings')}</h1>
      <Dropdown />
    </>
  );
};
