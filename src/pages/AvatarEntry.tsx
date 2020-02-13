import React from 'react';
import styled from 'styled-px2vw';
import { animated, useTrail } from 'react-spring';
import { BackGroundImage, Container } from '../styled';
import AvatarTitleImage from '../assets/AvatarTitle.png';
import AvatarEntryTextImage from '../assets/AvatarEntryText.png';
import AvatarEntryButtonImage from '../assets/AvatarEntryButton.png';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: 934px;
`;

const Title = styled(animated.div)`
  height: 71px;
  width: 554px;
  background-image: url(${AvatarTitleImage});
  margin: 0 auto;
  ${BackGroundImage}
`;

const Text = styled(animated.div)`
  height: 541px;
  width: 403px;
  background-image: url(${AvatarEntryTextImage});
  margin: 98px auto 109px auto;
  ${BackGroundImage}
`;

const Button = styled(animated.div)`
  height: 106px;
  width: 371px;
  background-image: url(${AvatarEntryButtonImage});
  margin: 0 auto;
  ${BackGroundImage}
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
        <Link to="/avatar-generate" replace={true}>
          <Button style={Animation[2]}/>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default AvatarEntryPage;
