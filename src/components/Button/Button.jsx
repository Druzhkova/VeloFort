import React from 'react';
import styles from './Button.module.css';

export function Button({
  children, onClick, ...restProps
}) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
}
