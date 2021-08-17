import { btnPlay } from '@assets';
import styles from './Button.module.css';

export const Button = ({ play, isPlaying }) => (
  <div className={styles.container}>
    {
      isPlaying
        ? <div className={styles.btnStop} onClick={play} />
        : (
          <img
            className={styles.btnPlay}
            src={btnPlay}
            onClick={play}
            alt=""
          />
        )
    }
  </div>
);
