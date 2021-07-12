import { useState, useRef, useEffect } from 'react';
import styles from './Slider.module.css';
import { Button } from '../Button';
import { ControlPanel } from '../ControlPanel';

export const Slider = ({
  percentage = 0, onChange, play, isPlaying, duration, currentTime,
}) => {
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);

  const rangeRef = useRef();
  const thumbRef = useRef();

  useEffect(() => {
    const thumbWidth = thumbRef.current.getBoundingClientRect().width;
    const centerThumb = (thumbWidth / 100) * percentage * -1;
    setPosition(percentage);
    setMarginLeft(centerThumb);
  }, [percentage]);

  return (
    <div className={styles.wrapper}>
      <Button
        play={play}
        isPlaying={isPlaying}
      />
      <div className={styles.container}>
        <ControlPanel
          duration={duration}
          currentTime={currentTime}
        />
        <div
          ref={thumbRef}
          style={{
            left: `${position}%`,
            marginLeft: `${marginLeft}px`,
          }}
          className={styles.thumb}
        />
        <input
          type="range"
          value={position}
          ref={rangeRef}
          step="0.01"
          onChange={onChange}
          className={styles.input}
        />
      </div>
    </div>
  );
};
