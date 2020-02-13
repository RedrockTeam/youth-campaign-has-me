import { createGlobalStyle } from 'styled-components';
import styled from 'styled-px2vw';

export const PositionAll = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

export const Container = styled.div`
  position: absolute;
  ${PositionAll};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GlobalStyle = createGlobalStyle`
  a { text-decoration: none; }
  html, body {
     position: absolute;
     ${PositionAll};
     overflow: hidden;
     -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;
