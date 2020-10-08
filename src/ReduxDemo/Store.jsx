/*
* 使用redux的步骤
*   - 安装依赖
*   - 引入createStore
*   - 创建reducer
*   - 根据reducer创建store
*   - 通过store订阅状态改变的事件
*   - 通过store派发状态改变的事件
* dispatch触发的顺序
*   - subscribe函数
*   - reducer函数
*  为什么在组件里面重新支行render无法重新渲染视力呢???
* */

import React from 'react';
// import { createStore } from 'redux';
// const INCREMENT = 'increment';
// const DECREMENT = 'decrement';
// const reducer = (state = 0, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return state + 1;
//     case DECREMENT:
//       return state - 1;
//     default:
//       return state;
//   }
// }
//
// const store = createStore(reducer);

function ShowValue(props) {
  console.log(props);
  return (
    <div>
    </div>
  )
}

export default class Store extends React.Component{
  constructor() {
    super();
    // store.subscribe(() => this.render)
  }
  // handleClick(type) {
  //   store.dispatch({ type });
  // }
  render() {
    return (
      <div>
        {/*<ShowValue value={ store.getState() } />*/}
        {/*<button onClick={ () => this.handleClick(INCREMENT) }>加1</button>*/}
        {/*<button onClick={ () => this.handleClick(DECREMENT) }>减1</button>*/}
        store的值是 { this.props.value }
        <button onClick={ this.props.clickIncrement }>加1</button>
        <button onClick={ this.props.clickDecrement }>减1</button>
      </div>
    );
  }
}
