import React from 'react';
import styled from 'styled-px2vw';
import { Link } from 'react-router-dom';
import { animated, useTrail } from 'react-spring';
import { BackGroundImage, Container } from '../styled';
import IndexTitleImage from '../assets/IndexTitle.png';
import IndexTextImage from '../assets/IndexText.png';
import IndexButtonOneImage from '../assets/IndexButtonOne.png';
import IndexButtonTwoImage from '../assets/IndexButtonTwo.png';
import IndexCopImage from '../assets/IndexCop.png';
import IndexTopImage from '../assets/IndexTop.png';

const Wrapper = styled.div``;

const Title = styled(animated.div)`
  height: 243px;
  width: 550px;
  background-image: url(${IndexTitleImage});
  margin: 0 auto;
  ${BackGroundImage}
`;

const Text = styled(animated.div)`
  height: 520px;
  width: 576px;
  background-image: url(${IndexTextImage});
  margin: 30px auto 70px auto;
  ${BackGroundImage}
`;

const Button = styled(animated.div)`
  display: flex;
  justify-content: space-between;
  width: 625px;
`;

const ButtonOne = styled.div`
  height: 101px;
  width: 283px;
  background-image: url(${IndexButtonOneImage});
  ${BackGroundImage}
`;

const ButtonTwo = styled.div`
  height: 101px;
  width: 283px;
  background-image: url(${IndexButtonTwoImage});
  ${BackGroundImage}
`;

const IndexCop = styled.div`
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 20px;
  height: 76px;
  width: 511px;
  background-image: url(${IndexCopImage});
   ${BackGroundImage}
`;

const IndexTop = styled.div`
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 20px;
  height: 67px;
  width: 638px;
  background-image: url(${IndexTopImage});
   ${BackGroundImage}
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
      <IndexTop/>
      <Wrapper>
        <Title style={Animation[2]}/>
        <Text style={Animation[1]}/>
        <Button style={Animation[0]}>
          <Link to="/avatar-generate" replace={true}>
            <ButtonOne/>
          </Link>
          <Link to="/wallpaper" replace={true}>
            <ButtonTwo/>
          </Link>
        </Button>
      </Wrapper>
      <IndexCop/>
    </Container>
  );
};

export default IndexPage;
