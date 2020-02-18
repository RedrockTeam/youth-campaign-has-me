import React, { useState } from 'react';
import styled from 'styled-px2vw';
import MusicImage from '../assets/Music.png';
import MusicCloseImage from '../assets/MusicClose.png';
import { BackGroundImage } from '../styled';

const Wrapper = styled.div`
  div {
    position: absolute;
    z-index: 10;
    height: 69px;
    width: 60px;
    top: 17px;
    right: 28px;
    ${BackGroundImage}
  }
`;


const MusicControl: React.FC = () => {
  const [isShowMusic, setShowMusic] = useState(
    !localStorage.getItem('musicStop'),
  );
  const handelMusicPlay = () => {
    window.dispatchEvent(new Event('musicPlay'));
    setShowMusic(true);
    localStorage.removeItem('musicStop');
  };
  const handelMusicStop = () => {
    window.dispatchEvent(new Event('musicStop'));
    setShowMusic(false);
    localStorage.setItem('musicStop', '1');
  };
  return (
    <Wrapper>
      {isShowMusic ? (
        <div onClick={handelMusicStop} style={{ backgroundImage: `url(${MusicImage})` }}></div>
      ) : (
        <div onClick={handelMusicPlay} style={{ backgroundImage: `url(${MusicCloseImage})` }}></div>
      )}
    </Wrapper>
  );
};

export default MusicControl;
