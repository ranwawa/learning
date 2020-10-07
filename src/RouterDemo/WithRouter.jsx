/*
* 为什么需要withRouter
*   如果当前组件没有放到<Route>组件里面的话,就无法获取路由相关对象
*   用这个函数包裹一下即可
* */

import React from 'react';
import { withRouter, BrowserRouter, Route } from 'react-router-dom';
import RouterDemo from './RouterDemo';

function w (props) {
  console.log('props', props);
  return (
    <div>
      withrouterrrrrrrrrrrrr
    </div>
  )
}
function c(props) {
  function handleClick() {
    console.log('c', props);
  }
  return(
    <BrowserRouter>
      <Route path="/home" component={ w } />
      <Route>
        <button onClick={ handleClick } >点击按钮</button>
      </Route>
    </BrowserRouter>
  )
}

export default c;
