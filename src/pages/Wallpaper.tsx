import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-px2vw';
import { toPng } from 'html-to-image';
import { SwiperOptions } from 'swiper';
import Swiper from 'react-id-swiper';
import { animated, useTrail } from 'react-spring';
import { BackGroundImage, Container } from '../styled';
import WallpaperTitleImage from '../assets/WallpaperTitle.png';
import QCodeImage from '../assets/QCode.png';
import ArrowRightImage from '../assets/ArrowRight.png';
import ArrowLeftImage from '../assets/ArrowLeft.png';
import AvatarGenerateButtonImage from '../assets/AvatarGenerateButton.png';
import WallpaperLinkImage from '../assets/WallpaperLink.png';

const Wrapper = styled.div``;

const Title = styled(animated.div)`
  height: 71px;
  width: 554px;
  background-image: url(${WallpaperTitleImage});
  margin: 0 auto 40px auto;
  ${BackGroundImage}
`;

const CardWrapper = styled(animated.div)`
  height: 722px;
  width: 100vw;
  margin: 0 auto 38px auto;
  img {
    height: 722px;
    width: 418px;
  }
  .swiper-button-prev {
    height: 65px;
    width: 48px;
    background-image: url(${ArrowRightImage});
    left: 80px;
    &::after {
      content: '';
    }
    ${BackGroundImage}
  }
  .swiper-button-next {
    height: 65px;
    width: 48px;
    background-image: url(${ArrowLeftImage});
    right: 80px;
    &::after {
      content: '';
    }
    ${BackGroundImage}
  }
`;

const Card = styled.div`
  height: 722px;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const CardInner = styled.div`
  height: 722px;
  width: 418px;
  background-color: #cb5c7d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    height: 614px;
    width: 394px;
  }
  ${BackGroundImage}
`;

const Bottom = styled(animated.div)``;
const Tip = styled.div`
  height: 34px;
  width: 283px;
  background-image: url(${AvatarGenerateButtonImage});
  margin: 0 auto 40px auto;
  ${BackGroundImage}
`;

const CardContent = styled.div`
  width: 394px;
  height: 84px;
  background-color: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .text {
    height: 55px;
    width: 305px;
  }
`;

const QCode = styled.div`
  height: 64px;
  width: 64px;
  background-image: url(${QCodeImage});
  ${BackGroundImage}
`;


const LinkButton = styled.div`
  width: 284px;
  height: 101px;
  margin: 0 auto;
  background-image: url(${WallpaperLinkImage});
  ${BackGroundImage}
`;


const creatText = (rank: number) => {
  const canvas = document.createElement('canvas');
  canvas.height = 55;
  canvas.width = 305;
  const ctx = canvas.getContext('2d');
  ctx!.font = '22px/22px "font"';
  //2. 使用`fillStyle`设置字体颜色。
  ctx!.fillStyle = '#232323';
  //3. 使用`fillText()`方法显示字体。
  ctx!.fillText(`青春战“疫”，我担当`, 0, 25);
  ctx!.fillText(`我是第`, 0, 50);
  const strNumber = ` ${rank.toString().padStart(6, '0')} `;
  // 量出第一个地方的字体
  const metrics1 = ctx!.measureText(`我是第`);
  // 量出第二个地方的字体
  const metrics2 = ctx!.measureText(strNumber);
  ctx!.fillStyle = '#ff0303';
  ctx!.fillText(strNumber, metrics1.width, 50);
  ctx!.fillStyle = '#232323';
  ctx!.fillText(`位传递者`, metrics1.width + metrics2.width, 50);
  const text = document.querySelectorAll('.text');
  text.forEach(item => {
    item.outerHTML = `<img class="text" src="${canvas.toDataURL()}" alt="text">`;
  });
};

const WallpaperPage: React.FC = () => {
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
    let timer: number;
    fetch(`${process.env.REACT_APP_BE_URL}card?redid=${localStorage.getItem('youth-campaign-head-img')}`)
      .then(r => r.json() as Promise<number>)
      .then(r => {
        // @ts-ignore
        WXSHARE.ready(function() {
          var option = {
            title: `我是第${r}位"青春战'疫'，我担当"线上能量传递者`,
            link: process.env.REACT_APP_FE_URL,
            imgUrl: process.env.REACT_APP_ICO,
            desc: process.env.REACT_APP_DESC,
            type: '',
            success: function() {
              console.log('分享成功');
            },
            cancel: function() {
              console.log('取消分享');
            },
          };
          // @ts-ignore
          wx.onMenuShareTimeline(option);
          // @ts-ignore
          wx.onMenuShareAppMessage(option);
          // @ts-ignore
          wx.onMenuShareQQ(option);
          // @ts-ignore
          wx.onMenuShareWeibo(option);
          // @ts-ignore
          wx.onMenuShareQZone(option);
        });
        creatText(r);
      }).then(() => {
      // @ts-ignore
      timer = setTimeout(() => {
        const dom = document.querySelectorAll('.card');
        dom.forEach(item => {
          toPng(item as HTMLElement).then(r => item.outerHTML = `<img src="${r}" alt="card">`);
        });
      }, 1000);
    });
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const swipeOptions: SwiperOptions = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  return (
    <Container>
      <Wrapper>
        <Title style={Animation[2]}/>
        <CardWrapper style={Animation[1]}>
          <Swiper {...swipeOptions}>
            {
              [...Array(4).keys() as unknown as number[]].map(item =>
                <Card key={item}>
                  <CardInner className="card">
                    <img src={require(`../assets/Wallpaper1.png`)} alt={item.toString()}/>
                    <CardContent>
                      <img className="text" alt={item.toString()} src=""/>
                      <QCode/>
                    </CardContent>
                  </CardInner>
                </Card>,
              )
            }
          </Swiper>
        </CardWrapper>
        <Bottom style={Animation[2]}>
          <Tip/>
        </Bottom>
        <Link to={'/avatar-generate'} replace={true}>
          <LinkButton/>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default WallpaperPage;
