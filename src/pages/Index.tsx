import React from 'react';
import styled from 'styled-px2vw';
import { Link } from 'react-router-dom';
import { animated, useTrail } from 'react-spring';
import { Container } from '../styled';
import IndexTitleImage from '../assets/IndexTitle.png';
import IndexTextImage from '../assets/IndexText.png';
import IndexButtonOneImage from '../assets/IndexButtonOne.png';
import IndexButtonTwoImage from '../assets/IndexButtonTwo.png';

const Wrapper = styled.div`
  height: 940px;
`;

const Title = styled(animated.div)`
  height: 253px;
  width: 577px;
  background-image: url(${IndexTitleImage});
  background-size: cover;
  margin: 0 auto;
`;

const Text = styled(animated.div)`
  height: 454px;
  width: 520px;
  background-image: url(${IndexTextImage});
  background-size: cover;
  margin: 74px auto 60px auto;
`;

const Button = styled(animated.div)`
  display: flex;
  justify-content: space-between;
  width: 625px;
`;

const ButtonOne = styled.div`
  height: 101px;
  width: 284px;
  background-image: url(${IndexButtonOneImage});
  background-size: cover;
`;

const ButtonTwo = styled.div`
  height: 101px;
  width: 284px;
  background-image: url(${IndexButtonTwoImage});
  background-size: cover;
`;

const IndexPage: React.FC = () => {
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
        <Button style={Animation[2]}>
          <Link to="/avatar-entry" replace={true}>
            <ButtonOne/>
          </Link>
          <ButtonTwo/>
        </Button>
      </Wrapper>
    </Container>
  );
};

export default IndexPage;
