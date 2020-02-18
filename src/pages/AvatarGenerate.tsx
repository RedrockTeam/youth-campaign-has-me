import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-px2vw';
import { animated, useTrail } from 'react-spring';
import { BackGroundImage, Container } from '../styled';
import AvatarTitleImage from '../assets/AvatarTitle.png';
import AvatarGenerateCardImage from '../assets/AvatarGenerateCard.png';
import AvatarGenerateButtonImage from '../assets/AvatarGenerateButton.png';
import AvatarGenerateIconImage from '../assets/AvatarGenerateIcon.png';
import AvatarGenerateSilkImage from '../assets/AvatarGenerateSilk.png';
import AvatarGenerateLinkImage from '../assets/AvatarGenerateLink.png';

const Wrapper = styled.div``;

const Title = styled(animated.div)`
  height: 71px;
  width: 554px;
  background-image: url(${AvatarTitleImage});
  margin: 0 auto;
  ${BackGroundImage}
`;

const Card = styled(animated.div)`
  position: relative;
  height: 432px;
  width: 426px;
  background-image: url(${AvatarGenerateCardImage});
  margin: 120px auto 60px auto;
  ${BackGroundImage}
`;

const AvatarWrapper = styled.div`
  position: absolute;
  height: 354px;
  width: 354px;
  top: 33px;
  right: 38px;
  z-index: 0;
  & > img {
    height: 354px;
    width: 354px;
  }
`;

const Button = styled(animated.div)`
  height: 34px;
  width: 283px;
  background-image: url(${AvatarGenerateButtonImage});
  margin: 0 auto 100px auto; 
  ${BackGroundImage}
`;

const LinkButton = styled.div`
  width: 284px;
  height: 101px;
  margin: 0 auto;
  background-image: url(${AvatarGenerateLinkImage});
  ${BackGroundImage}
`;

const createImage = () => new Promise<string>(resolve => {
  const avatarImage = new Image();
  avatarImage.crossOrigin = 'Anonymous';
  avatarImage.src = localStorage.getItem('youth-campaign-head-img') as string;
  avatarImage.onload = () => {
    const iconImage = new Image();
    iconImage.src = AvatarGenerateIconImage;
    iconImage.onload = () => {
      const silkImage = new Image();
      silkImage.src = AvatarGenerateSilkImage;
      silkImage.onload = () => {
        const canvas = document.createElement('canvas');
        //   height: 354px;
        //   width: 354px;
        canvas.width = 354;
        canvas.height = 354;
        const ctx = canvas.getContext('2d');
        ctx!.fillStyle = '#c34464';
        ctx!.fillRect(0, 0, canvas.width, canvas.height);
        ctx!.drawImage(avatarImage, 0, 0, 354, 354);
        ctx!.drawImage(iconImage, 5, 5, 74, 75);
        ctx!.drawImage(silkImage, 0, 284, 354, 71);
        resolve(canvas.toDataURL());
      };
    };
  };
});

const AvatarGeneratePage: React.FC = () => {
  const url = useRef<string>();
  const [loading, setLoading] = useState(false);
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
    createImage().then(r => {
      url.current = r;
      setLoading(true);
    });
  }, []);
  return (
    <Container>
      <Wrapper>
        <Title style={Animation[2]}/>
        <Card style={Animation[1]}>
          <AvatarWrapper>
            {loading && <img src={url.current} alt={'avatar'}/>}
          </AvatarWrapper>
        </Card>
        <Button style={Animation[0]}/>
        <Link replace={true} to={'/wallpaper'}>
          <LinkButton/>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default AvatarGeneratePage;
