import React, { useEffect } from 'react';
import styled from 'styled-px2vw';
import { toPng } from 'html-to-image';
import { SwiperOptions } from 'swiper';
import Swiper from 'react-id-swiper';
import { animated, useTrail } from 'react-spring';
import { BackGroundImage, Container } from '../styled';
import WallpaperTitleImage from '../assets/WallpaperTitle.png';
import WallpaperCardImage from '../assets/WallpaperCard.png';
import QCodeImage from '../assets/QCode.png';
import ArrowRightImage from '../assets/ArrowRight.png';
import ArrowLeftImage from '../assets/ArrowLeft.png';
import AvatarGenerateButtonImage from '../assets/AvatarGenerateButton.png';

const Wrapper = styled.div``;

const Title = styled(animated.div)`
  height: 71px;
  width: 554px;
  background-image: url(${WallpaperTitleImage});
  margin: 0 auto 55px auto;
  ${BackGroundImage}
`;

const CardWrapper = styled(animated.div)`
  height: 746px;
  width: 100vw;
  margin: 0 auto 42px auto;
  img {
    height: 746px;
    width: 432px;
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
  height: 746px;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const CardInner = styled.div`
  height: 746px;
  width: 432px;
  background-image: url(${WallpaperCardImage});
  display: flex;
  flex-direction: column;
  & > img {
    height: 523px;
    width: 384px;
    margin: 27px auto 22px auto;
  }
  ${BackGroundImage}
`;

const Bottom = styled(animated.div)``;
const Tip = styled.div`
  height: 34px;
  width: 283px;
  background-image: url(${AvatarGenerateButtonImage});
  margin: 0 auto;
  ${BackGroundImage}
`;

const CardContent = styled.div`
  width: 384px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  
  .text {
    height: 110px;
    width: 278px;
  }
`;

const QCode = styled.div`
  height: 110px;
  width: 110px;
  background-image: url(${QCodeImage});
  ${BackGroundImage}
`;

const creatText = (rank: number) => {
  const canvas = document.createElement('canvas');
  canvas.height = 110;
  canvas.width = 278;
  const ctx = canvas.getContext('2d');
  ctx!.font = '24px/24px "font"';
  //2. 使用`fillStyle`设置字体颜色。
  ctx!.fillStyle = '#cd3f31';
  //3. 使用`fillText()`方法显示字体。
  ctx!.fillText(`我是第${rank}位"青春战'疫'`, 0, 25);
  ctx!.fillText(`行动有我"线上能量传递者`, 0, 50);
  ctx!.fillText(`加入我们!为英雄点赞!`, 0, 75);
  ctx!.fillText(`为祖国祝福!`, 0, 100);
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
    fetch(`${process.env.REACT_APP_BE_URL}card?redid=${localStorage.getItem('red-id')}`)
      .then(r => r.json() as Promise<number>)
      .then(r => {
        // @ts-ignore
        WXSHARE.ready(function() {
          var option = {
            title: `我是第${r}位"青春战'疫'行动有我"线上能量传递者`,
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
                    <img src={require(`../assets/Wallpaper${item + 1}.jpg`)} alt={item.toString()}/>
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
      </Wrapper>
    </Container>
  );
};

export default WallpaperPage;
