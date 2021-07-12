import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import styles from './Dropdown.module.css';
import { expandMore } from '../../assets';

export const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('Русский');
  const { t } = useTranslation();

  const languages = [
    {
      code: 'fr',
      name: 'Français',
    },
    {
      code: 'en',
      name: 'English',
    },
    {
      code: 'ru',
      name: 'Русский',
    },
  ];

  return (
    <div className={styles.dropdown}>
      <h2 className={styles.dropdownTitle}>{t('Application_language')}</h2>
      <div className={styles.dropdownBtn} onClick={() => setIsActive(!isActive)}>
        {selected}
        <img src={expandMore} alt="Expand more" />
      </div>
      {isActive && (
        <div className={styles.dropdownContent}>
          {languages.map(({ code, name }, index) => (
            name !== selected
               && (
               <div
                 onClick={() => {
                   setSelected(name);
                   setIsActive(false);
                   i18next.changeLanguage(code);
                 }}
                 key={index}
                 className={styles.dropdownItem}
               >
                 {name}
               </div>
               )
          ))}
        </div>
      )}
    </div>
  );
};
