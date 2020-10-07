/*
 * 路由导航
 * <Redirect>必须放到Switch标签里面,否则会导致后续标签给渲染出来
 * */
import React from 'react';
import { BrowserRouter, Link, Switch, Redirect, Route } from 'react-router-dom';

function Mine(props) {
  function goHome() {
    console.log(props);
    // props.history.push('/home');
    props.history.replace('/home');
  }
  return (
    <div>
      mineeeeeeeeeeeeee
      <button onClick={goHome}>返回首页</button>
    </div>
  );
}
export default (props) => {
  function handleClick() {
    console.log(props);
  }
  return (
    <BrowserRouter>
      <Switch>
        <Redirect
          from="/others"
          to="/home"
        />
        <Route
          exact
          path="/home"
        >
          homeeeeeeeeeee
        </Route>
        <Route
          exact
          path="/mine"
          component={ Mine }
        >
        </Route>
        <Route exact>404</Route>
      </Switch>
    </BrowserRouter>
  );
}
