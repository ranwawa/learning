/*
* 异步中间件
* 什么是异步中间件
*   - actions是一个函数,并且是异步函数
*   - 在中间件执行的时候,要求action是对象,这个时候就会报错
*   - 所以中间件要进行异步处理....貌似也木有搞懂,整个redux的触发流程及完整生命周期
* 为什么需要异步中间件
*   - 有一些redux数据,是异步获取的,就必须这样操作了
* 如何使用异步中间件
*   - 在actions中,返回一个异步函数
*   - 这个函数接受一个dispatch参数,返回一个dispatch()结果
*   - 然后通过redux-thunk引入异步中间件
*   - 再将其传递给createStore的第3个参数
* */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';

class MiddleWareAsync extends React.Component {
  render() {
    return (
      <div>
        MiddleWareAsync
        <br />
        {
          this.props.counter === 'loading' ?
            <div>loading</div> :
            this.props.counter
        }
        <br />
        <button onClick={ this.props.incrementAsync }>+</button>
      </div>
    );
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    ...bindActionCreators(actions, dispatch)
  }
}

export default connect((state) => state, mapActionsToProps)(MiddleWareAsync);
