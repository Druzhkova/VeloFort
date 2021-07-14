import React from 'react';
import { convertSecondsToHours } from '@utils/convertSecondsToHours';
import styles from './ControlPanel.module.css';

export const ControlPanel = ({ duration, currentTime }) => (
  <div className={styles.container}>
    <div className={styles.timer}>{convertSecondsToHours(currentTime)}</div>
    <div className={styles.timer}>{convertSecondsToHours(duration)}</div>
  </div>
);
