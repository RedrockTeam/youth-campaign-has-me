import React, { useEffect } from 'react';
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
  height: 560px;
  width: 474px;
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
  left: 33px;
  top: 20px;
  margin: 0 auto;
  height: 56px;
  width: 565px;
  background-image: url(${IndexTopImage});
   ${BackGroundImage}
`;

const share = (r: number) => {
  const body = document.getElementsByTagName('body')[0];
  const jsNode1 = document.createElement('script');
  const jsNode2 = document.createElement('script');
  jsNode1.setAttribute('type', 'text/javascript');
  jsNode1.setAttribute('src', 'https://res.wx.qq.com/open/js/jweixin-1.2.0.js');
  jsNode2.setAttribute('type', 'text/javascript');
  jsNode2.setAttribute('src', 'https://wx.redrock.team/wx-api/share.js');
  body.appendChild(jsNode1);
  body.appendChild(jsNode2);
  jsNode1.onload = () => {
    jsNode2.onload = () => {
      try {
        // @ts-ignore
        WXSHARE.ready(function() {
          var option = {
            title: `“青春战‘疫’，我担当”我是第 ${r} 位网络誓师传递者`,
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
      } catch (e) {
        console.log(e);
      }
    };
  };
};

const IndexPage: React.FC = () => {
  useEffect(() => {
    if (!localStorage.getItem('youth-campaign-rank')) {
      fetch(`${process.env.REACT_APP_BE_URL}card?redid=
          ${encodeURI(localStorage.getItem('youth-campaign-head-img') as string)
      + localStorage.getItem('youth-campaign-nickname')}`)
        .then(r => r.json() as Promise<number>)
        .then(r => {
          localStorage.setItem('youth-campaign-rank', r.toString());
          share(r);
        });
    } else {
      share(Number(localStorage.getItem('youth-campaign-rank')));
    }
  });

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
