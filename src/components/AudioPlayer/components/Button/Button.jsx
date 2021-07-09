import styled from 'styled-components';
import { btnPlay } from '../../../../assets'

export const Button = ({ play, isPlaying }) => {
    return (
        <Container>
            {
                isPlaying 
                    ? <BtnStop onClick={play}/>
                    : <BtnPlay src={btnPlay} onClick={play} alt=""/>
            }
        </Container>
      )
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  min-width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #FFD100;
  margin-right: 20px;
`;

const BtnPlay = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-25%, -50%);
  width: 13.75;
  height: 17.5px;
  cursor: pointer;
`;

const BtnStop = styled.div`
  height: 17.5px;
  width: 5.75px;
  border-left: 4px solid#323765;
  border-right: 4px solid#323765;
  cursor: pointer;
`;



