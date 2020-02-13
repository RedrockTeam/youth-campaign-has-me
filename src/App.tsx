import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import styled from 'styled-px2vw';
import IndexPage from './pages/Index';
import AvatarEntryPage from './pages/AvatarEntry';
import Background from './Background';
import { PositionAll } from './styled';
import AvatarGeneratePage from './pages/AvatarGenerate';

const Container = styled(animated.div)`
  position: absolute;
  ${PositionAll};
`;

// @ts-ignore
const AnimatedRoute: React.FC = ({ children }) => {
  const location = useLocation();
  const transitions = useTransition(location, location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });
  return transitions.map(({ item, props, key }) => (
    <Container key={key} style={props}>
      <Switch location={item}>{children}</Switch>
    </Container>
  ));
};


const App = () => {
  return (
    <Background>
      <AnimatedRoute>
        <Route exact path="/" component={IndexPage}/>
        <Route exact path="/avatar-entry" component={AvatarEntryPage}/>
        <Route exact path="/avatar-generate" component={AvatarGeneratePage}/>
      </AnimatedRoute>
    </Background>
  );
};

export default App;
