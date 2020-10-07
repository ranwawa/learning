/*
* react router dom
* */

import React from 'react';
import Home from './home';
import Mine from './mine';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

export default class HashRouter extends React.Component {
  render() {
    return (
      <Router>
        <Link to="/home">首页</Link>
        <Link to="/mine">个人中心</Link>
        <Route path="/home"> <Home /> </Route>
        <Route path="/mine" component={ Mine } />
      </Router>
    );
  }
}
