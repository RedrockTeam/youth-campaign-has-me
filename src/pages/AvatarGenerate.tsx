import React, { useEffect } from 'react';
import styled from 'styled-px2vw';
import { toPng } from 'html-to-image';
import { animated, useTrail } from 'react-spring';
import { BackGroundImage, Container } from '../styled';
import AvatarTitleImage from '../assets/AvatarTitle.png';
import AvatarGenerateCardImage from '../assets/AvatarGenerateCard.png';
import AvatarGenerateButtonImage from '../assets/AvatarGenerateButton.png';
import AvatarGenerateIconImage from '../assets/AvatarGenerateIcon.png';
import AvatarGenerateSilkImage from '../assets/AvatarGenerateSilk.png';

const Wrapper = styled.div`
  height: 710px;
`;

const Title = styled(animated.div)`
  height: 71px;
  width: 554px;
  background-image: url(${AvatarTitleImage});
  margin: 0 auto;
  ${BackGroundImage}
`;

const Card = styled(animated.div)`
  position: relative;
  height: 418px;
  width: 406px;
  background-image: url(${AvatarGenerateCardImage});
  margin: 120px auto 70px auto;
  ${BackGroundImage}
`;

const AvatarWrapper = styled.div`
  position: absolute;
  height: 354px;
  width: 354px;
  top: 28px;
  right: 28px;
  z-index: 0;
  & > img {
    height: 100%;
    width: 100%;
  }
`;

const Avatar = styled.div`
  height: 100%;
  width: 100%;
  background-color: burlywood;
  & > img {
    height: 100%;
    width: 100%;
  }
`;

const Icon = styled.div`
  position: absolute;
  z-index: 2;
  top: 5px;
  left: 5px;
  width: 74px;
  height: 75px;
  background-image: url(${AvatarGenerateIconImage});
  background-size: cover;
`;

const Silk = styled.div`
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  bottom: 0;
  height: 71px;
  background-image: url(${AvatarGenerateSilkImage});
  background-size: cover;
`;

const Button = styled(animated.div)`
  height: 34px;
  width: 283px;
  background-image: url(${AvatarGenerateButtonImage});
  margin: 0 auto;
  ${BackGroundImage}
`;


const AvatarGeneratePage: React.FC = () => {
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
  useEffect(() => {
    const timer = setTimeout(() => {
      const dom = document.querySelector('#avatar') as HTMLElement;
      toPng(dom).then(r => dom.outerHTML = `<img src="${r}" alt="avatar">`);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <Container>
      <Wrapper>
        <Title style={Animation[2]}/>
        <Card style={Animation[1]}>
          <AvatarWrapper>
            <Avatar id="avatar">
              <Icon/>
              <Silk/>
              <img
                src='http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLU1f5yfs8veQibdyC9icBjUZHv5s9IY4Wdqrnp3pECcFCQsVu78bXIW7a4ibjNNRj48XAQvliccPiasIg/132'/>
            </Avatar>
          </AvatarWrapper>
        </Card>
        <Button style={Animation[0]}/>
      </Wrapper>
    </Container>
  );
};

export default AvatarGeneratePage;