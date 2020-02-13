import React from 'react';
import styled from 'styled-px2vw';
import { PositionAll } from '../styled';
import IndexTitleImage from '../assets/IndexTitle.png';
import IndexTextImage from '../assets/IndexText.png';
import IndexButtonOneImage from '../assets/IndexButtonOne.png';
import IndexButtonTwoImage from '../assets/IndexButtonTwo.png';

const Container = styled.div`
  position: absolute;
  ${PositionAll};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 940px;
`;

const TitleImage = styled.div`
  height: 253px;
  width: 577px;
  background-image: url(${IndexTitleImage});
  background-size: cover;
  margin: 0 auto;
`;

const TextImage = styled.div`
  height: 454px;
  width: 520px;
  background-image: url(${IndexTextImage});
  background-size: cover;
  margin: 74px auto 60px auto;
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

const Button = styled.div`
  display: flex;
  justify-content: space-between;
  width: 625px;
`;

const IndexPage: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <TitleImage/>
        <TextImage/>
        <Button>
          <ButtonOne/>
          <ButtonTwo/>
        </Button>
      </Wrapper>
    </Container>
  );
};

export default IndexPage;
