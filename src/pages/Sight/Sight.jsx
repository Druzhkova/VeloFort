import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
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
        }, index) => (
          <StyledLink
            key={index}
            to={`/${title}`}
          >
            <Item title={t(`sightObject.${title}.title`)} distance={distance} time={time} img={img[0]} />
          </StyledLink>
        ))
      }
    </>
  );
};

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #323765;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
