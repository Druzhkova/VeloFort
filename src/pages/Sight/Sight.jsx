import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { data } from '@assets/sight';
import { Loading } from '@components';
import { Item } from './components';

export const Sight = () => {
  const { t } = useTranslation();

  const sight = data.map(({
    title, distance, time, img,
  }, index) => (
    <StyledLink
      key={index}
      to={`/${title}`}
    >
      <Item title={t(`sightObject.${title}.title`)} distance={distance} time={time} img={img[0]} />
    </StyledLink>
  ));

  return (
    <>
      {
        data
          ? (
            <>
              <h1>{t('sightPage.sight')}</h1>
              {sight}
            </>
          )
          : <Loading />
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
