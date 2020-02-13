import React from 'react';
import styled from 'styled-px2vw';
import { animated, useTrail } from 'react-spring';
import { Container } from '../styled';
import AvatarEntryTitleImage from '../assets/AvatarEntryTitle.png';
import AvatarEntryTextImage from '../assets/AvatarEntryText.png';
import AvatarEntryButtonImage from '../assets/AvatarEntryButton.png';

const Wrapper = styled.div`
  height: 934px;
`;

const Title = styled(animated.div)`
  height: 71px;
  width: 554px;
  background-image: url(${AvatarEntryTitleImage});
  background-size: cover;
  margin: 0 auto;
`;

const Text = styled(animated.div)`
  height: 541px;
  width: 403px;
  background-image: url(${AvatarEntryTextImage});
  background-size: cover;
  margin: 98px auto 109px auto;
`;

const Button = styled(animated.div)`
  height: 106px;
  width: 371px;
  background-image: url(${AvatarEntryButtonImage});
  background-size: cover;
  margin: 0 auto;
`;


const AvatarEntryPage: React.FC = () => {
  const Animation = useTrail(3, {
    transform: 'translate3d(0,0%,0)',
    opacity: 1,
    from: { transform: 'translate3d(0,-100%,0)', opacity: 0 },
    config: {
      mass: 8,
      tension: 500,
      friction: 80,
    },
  });
  return (
    <Container>
      <Wrapper>
        <Title style={Animation[0]}/>
        <Text style={Animation[1]}/>
        <Button style={Animation[2]}/>
      </Wrapper>
    </Container>
  );
};

export default AvatarEntryPage;
