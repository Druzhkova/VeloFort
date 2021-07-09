import { useState, useRef, useEffect } from 'react'
import { Button } from '../Button'
import { ControlPanel } from '../ControlPanel'
import styled from 'styled-components';

export const Slider = ({ percentage = 0, onChange, play, isPlaying, duration, currentTime}) => {
  const [position, setPosition] = useState(0)
  const [marginLeft, setMarginLeft] = useState(0)
  const [progressBarWidth, setProgressBarWidth] = useState(0)

  const rangeRef = useRef()
  const thumbRef = useRef()

  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width
    const thumbWidth = thumbRef.current.getBoundingClientRect().width
    const centerThumb = (thumbWidth / 100) * percentage * -1
    const centerProgressBar =
      thumbWidth + (rangeWidth / 100) * percentage - (thumbWidth / 100) * percentage
    setPosition(percentage)
    setMarginLeft(centerThumb)
    setProgressBarWidth(centerProgressBar)
  }, [percentage])

  return (
    <Wrapper>
      <Button
        play={play}
        isPlaying={isPlaying}
      />
      <Container>
        <ControlPanel
                duration={duration}
                currentTime={currentTime}
        />
        <ProgressBar
          style={{
            width: `${progressBarWidth}px`
          }}
        ></ProgressBar>
        <Thumb
          ref={thumbRef}
          style={{
            left: `${position}%`,
            marginLeft: `${marginLeft}px`
          }}
        ></Thumb>
        <Input
          type='range'
          value={position}
          ref={rangeRef}
          step='0.01'
          onChange={onChange}
        />
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  position: relative;
  max-width: 300px;
  width: 100%;
  ::before {
    content: '';
    background-color: #FFD100;
    width: 99%;
    height: 4px;
    display: block;
    position: absolute;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    box-shadow: 0 0 3px rgb(0 0 0 / 10%);
  }
`;

const Input = styled.input`
  -webkit-appearance: none;
  height: 10px;
  width: 100%;
  cursor: pointer;
  opacity: 0;
  margin: 0 auto;
  &::-webkit-slider-thumb {
  width: 14px;
  height: 14px;

  background: #350f2d;
  border: 1px solid #000000;
  border-radius: 50%;
  cursor: pointer;
  -webkit-appearance: none;
  }
`;

const Thumb = styled.div`
  width: 16px;
  height: 16px;
  z-index: 3;
  background: #0B24FB;;
  position: absolute;
  border-radius: 50%;
  border: 2px solid #fff;
  top: 50%;
  transform: translate(0%, -50%);
  pointer-events: none;
  user-select: none;
`;

const ProgressBar = styled.div`
  background-color: #FFD100;
  width: 0%;
  height: 4px;
  display: block;
  position: absolute;
  border-radius: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  user-select: none;
  pointer-events: none;
`;