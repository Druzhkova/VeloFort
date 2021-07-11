import React from 'react';
import styled from 'styled-components';
import { convertSecondsToHours } from '../../../../utils/convertSecondsToHours';

export const ControlPanel = ({ duration, currentTime }) => (
  <Container>
    <Timer>{convertSecondsToHours(currentTime)}</Timer>
    <Timer>{convertSecondsToHours(duration)}</Timer>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Timer = styled.div`
  font-size: 12px;
  font-weight: 400;
`;
