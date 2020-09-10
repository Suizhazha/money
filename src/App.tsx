import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Money from './views/Money';
import NotFound from './views/NotFound';
import Tags from './views/Tags';
import Statistics from './views/Statistics';
import styled from 'styled-components';


const AppWrapper = styled.div`
color: #333;
`
function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route path="/tags">
            <Tags/>
          </Route>
          <Route path="/money">
            <Money/>
          </Route>
          <Route path="/statistics">
            <Statistics/>
          </Route>
          <Redirect exact from='/' to='money'/>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}


export default App;
