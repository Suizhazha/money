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


function App() {
  return (
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
  );
}


export default App;
