/*
* 渲染函数
* render是放在属性里面的,而非body
* */
import React from 'react';
import RenderFunctionComponent from './RenderFunctionComponent';
import {BrowserRouter, Route} from 'react-router-dom';

export default () => {
  return (
    <BrowserRouter>
      <Route path="/home" render={ (options) => <RenderFunctionComponent {...options} name="名字"/> } />
    </BrowserRouter>
  )
}
