/*
* 路由嵌套
* 这个和vue-router的嵌套路由还是有所差别的
* */

import React from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'
export default class NestDemo extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/profile">profile</Link>
        </div>
        <div>
          <Link to="/profile/password">profile/password</Link>
        </div>
        <div>
          <Link to="/profile/setting">profile/setting</Link>
        </div>
        {/* 下面这个只会渲染第一层 */}
        <div>
          <Link to="/profile/list">profile/list</Link>
        </div>
        {/* 下面这个只会渲染第一层 */}
        <div>
          <Link to="/profile/goods/list">profile/goods/list</Link>
        </div>
        {/* 下面这个无法配对 */}
        <div>
          <Link to="/goods/list">/goods/list</Link>
        </div>
        <Route path="/profile">
          <h1>个人中心</h1>
          <Switch>
            <Route path="/profile/password">
              <p>修改密码</p>
            </Route>
            <Route path="/profile/setting">
              <p>设置</p>
            </Route>
            <Route path="/list">
              <p>商品列表</p>
            </Route>
          </Switch>
        </Route>
      </BrowserRouter>
    );
  }
}
