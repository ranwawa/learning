/*
* 提示
* 这种提示是利用浏览器原生的prompt.有相关的钩子,自己做提示吗
* */

import React from 'react';
import Link from './link';
import { BrowserRouter, Route, Prompt} from 'react-router-dom';

export default class extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <Link />
        <Route exact path="/home">
          <Prompt when={ true } message={ '是否要退出'} />
          home eeeeeeeeeeee
        </Route>
        <Route path="/home/mine" > mine eeeeeeeee</Route>
      </BrowserRouter>
    );
  }
}
