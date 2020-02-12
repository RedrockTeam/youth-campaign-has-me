import React from 'react';
import { Route } from 'react-router-dom';
import IndexPage from './pages/Index';

const App = () => {
  return (
    <>
      <Route exact path="/" component={IndexPage}/>
    </>
  );
};

export default App;
