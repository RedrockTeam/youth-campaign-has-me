import React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './styled';
// @ts-ignore
import Analytics from 'react-router-ga';
import * as Sentry from '@sentry/browser';


Sentry.init({ dsn: process.env.REACT_APP_SENTRY });

ReactDOM.render(
  <HashRouter>
    <Analytics id={process.env.REACT_APP_GA}>
      <Normalize/>
      <GlobalStyle/>
      <App/>
      <div style={{
        fontFamily: 'font',
        height: 0,
        width: 0,
      }}>1
      </div>
      <div style={{
        fontFamily: 'font1',
        height: 0,
        width: 0,
      }}>1
      </div>
    </Analytics>
  </HashRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
