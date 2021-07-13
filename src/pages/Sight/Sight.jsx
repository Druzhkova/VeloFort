import { useTranslation } from 'react-i18next';
import { Item } from './components';
import { data } from '../../assets/sight';

export const Sight = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('sightPage.sight')}</h1>
      {
        data.map(({
          title, distance, time, img,
        }) => <Item title={title} distance={distance} time={time} img={img} />)
      }

    </>

  );
};
