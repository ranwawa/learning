/*
* 什么是redux调试工具
*   - 就是通过一个chorme插件,可视化的调试redux相关数据,有点类似于vue的vue devtool
* 为什么需要redux调试工具
*   - 肉眼可见,人性化的界面.方便嘛
* redux调试工具的操作步骤
*   - chorme安装插件 redux devtools 当然要先找个梯子
*   - 项目中安装 redux-devtools-extension
*   - 通过redux-devtools-extension引入composeWithDevTools函数
*   - 用composeWithDevTools包裹applyMiddleware函数
*   - 然后将包裹结果传递给createStore函数的第3个参数
*   - 重启chorme,然后在控制台找到redux打开即可.
* */
import React from 'react';
import App from './app';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counter, user } from './ReduxDemo/reducer';
import reduxLogger from 'redux-logger';

const logger = store => next => action => {
  console.log('打印日志', store.getState().counter);
  const result = next(action);
  console.log('打印日志', store.getState().counter);
  return result;
}
const is5 = store => next => action => {
  if (store.getState().counter > 5) {
    return;
  }
  return next(action);
}
const store = createStore(combineReducers({
  counter,
  user,
}), {}, composeWithDevTools(applyMiddleware(logger, is5, reduxLogger, thunk)));


// const render = () => {
//   ReactDOM.render(<Store
//     clickIncrement={ () => store.dispatch({ type: INCREMENT })}
//     clickDecrement={ () => store.dispatch({ type: DECREMENT })}
//     value={ store.getState() }
//   />, document.getElementById('root'));
// };
// render();
// store.subscribe(() => render())

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'));
