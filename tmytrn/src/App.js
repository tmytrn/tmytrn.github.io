import React from 'react';
import './App.css';
import Portfolio from './Portfolio';
import Home from './Home';
import Project from './Project';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/"  exact component={Home}></Route>
      <Route path="/portfolio" exact component={Portfolio}></Route>
      <Route path="/portfolio/:projectId" component={Project}></Route>
      </Switch>
    </Router>
  );
}

export default App;
