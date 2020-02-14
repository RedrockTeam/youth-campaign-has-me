import React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './styled';

ReactDOM.render(
  <HashRouter>
    <Normalize/>
    <GlobalStyle/>
    <App/>
    <div style={{
      fontFamily: 'font',
      height: 0,
      width: 0,
    }}>1
    </div>
  </HashRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
