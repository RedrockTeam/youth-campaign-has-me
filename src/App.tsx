import React from 'react';
import { Route } from 'react-router-dom';
import IndexPage from './pages/Index';
import Background from './Background';

const App = () => {
  return (
    <Background>
      <Route exact path="/" component={IndexPage}/>
    </Background>
  );
};

export default App;
