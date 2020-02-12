import React from 'react';

import styled from 'styled-px2vw';
import BackgroundImage from './assets/Background.jpg';
import { PositionAll } from './styled';
import IndexIllustrationImage from './assets/IndexIllustration.png';
import BackgroundFrameImage from './assets/BackgroundFrame.png';

const Container = styled.div`
  position: absolute;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: left;
  ${PositionAll};
`;

const IllustrationImage = styled.div`
  position: absolute;
  background-image: url(${IndexIllustrationImage});
  height: 788px;
  width: 663px;
  background-size: cover;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-30%);
`;

const FrameImage = styled.div`
  position: absolute;
  ${PositionAll};
  background-image: url(${BackgroundFrameImage});
  background-size: 98vw 98vh;
  background-repeat: no-repeat;
  margin: 1vh 1vw;
`;

const Background: React.FC = ({ children }) => {
  return (
    <Container>
      <IllustrationImage/>
      <FrameImage/>
      {children}
    </Container>
  );
};

export default Background;
