/*
 * 导航链接
 * */
import React from 'react';
import './Navlink.css';
import { NavLink, BrowserRouter, Route, Switch } from 'react-router-dom';

export default () => {
  return (
    <BrowserRouter>
      <NavLink to="/home">home</NavLink>
      --------
      <NavLink activeClassName="selected" to="/mine">mine</NavLink>
      ---------
      <NavLink activeClassName="" activeStyle={{ 'font-size': '55px'}} to="/goods">goods</NavLink>
      <br />
      <Switch>
        <Route path="/home">homehomehome</Route>
        <Route path="/mine">mineminemine</Route>
        <Route path="/goods">goodssssssssssss</Route>
      </Switch>
    </BrowserRouter>
  );
}
