import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { notFound } from '@assets';
import styles from './NotFound.module.css';

export const NotFound = () => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <div className={styles.inner}>
      <div className={styles.buttonContainer} onClick={() => history.push('/')}>
        <button className={styles.button}>
          &#129044;
          {' '}
          {t('notFoundPage.btn_home_page')}
        </button>
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{t('notFoundPage.title')}</p>
        <span>{t('notFoundPage.subtitle')}</span>
      </div>
      <img className={styles.img} src={notFound} alt="" />
    </div>
  );
};
