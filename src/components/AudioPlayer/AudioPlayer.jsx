import styled from 'styled-components';
import { useState, useRef } from 'react'
import song from '../../assets/Brian Crain - A Simple Life.mp3'
import { Slider } from './components'

export const AudioPlayer = () => {
  const [percentage, setPercentage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const audioRef = useRef()

  const onChange = (e) => {
    const audio = audioRef.current
    audio.currentTime = (audio.duration / 100) * e.target.value
    setPercentage(e.target.value)
  }

  const play = () => {
    const audio = audioRef.current
    audio.volume = 0.1

    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
    }

    if (isPlaying) {
      setIsPlaying(false)
      audio.pause()
    }
  }

  const getCurrDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }

  return (
    <Container>
      <Slider 
      percentage={percentage} 
      onChange={onChange}
      play={play}
      isPlaying={isPlaying}
      duration={duration}
      currentTime={currentTime}
      />
      <audio
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2))
        }}
        src={song}
      ></audio>

    </Container>
  )
}

const Container = styled.div`
    max-width: 370px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
