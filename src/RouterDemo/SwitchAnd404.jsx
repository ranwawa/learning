/*
*  link还不能放在switch里面去,否则会导致一个都无法渲染出来,其原因是什么呢?
* */
import React from 'react';
import Home from './home';
import Mine from './mine';
import Link from './link';
import { HashRouter, Switch, Route } from 'react-router-dom';

export default () => {
  return (
    <HashRouter>
      <Link />
      <Switch>
        <Route
          exact
          path="/home"
        >
          <Home />
        </Route>
        <Route path="/home/mine">
          <Mine />
        </Route>
        <Route>404哦这个是</Route>
      </Switch>
    </HashRouter>
  );
}
