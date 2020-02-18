import React from 'react';
import styled from 'styled-px2vw';
import BackgroundImage from '../assets/Background.png';
import { PositionAll } from '../styled';

const Container = styled.div`
  position: absolute;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: left;
  ${PositionAll};
`;

const Background: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default Background;
