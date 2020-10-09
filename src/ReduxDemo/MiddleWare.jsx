/*
* 中间间
* 中间件是什么?
*   - 就是在dispatch之后,先触发中间件,再改变state的值
* 为什么需要中间件
*   - 相当于是封装逻辑,对单个状态的改变进行统一处理,避免重复编码
* 怎么用中间件
*   - 通过redux引入applyMiddleware
*   - 编写中间件函数
*     - 函数必须是3个函数组成,第一个函数的参数是store,第2函数的参数是next,第3个函数的参数是action
*     - 中件间函数要继续向下传,就必须return next(action)
*   - 将applyMiddleware(中间件函数, ...)作为createStore的第3个参数传递进去,生成store即可
* store,action,dispatch三者之间的关系
*   - store是一个仓库,里面存放各种状态.类似于vue里面的state
*     - 是通过createStore注入进来的
*   - action是各种操作方法,或者说是事件,类似于vue中的mutation
*     - 就是reducer,用来传递给createStore
*     - 其结果还会产生state
*   - dispatch是触发action(reducer)的动作,
*     执行了dispatch后,就会触发action,进而改变state,类似于vue中的$store.state.mutation()
*     - 额外还会触发subscribe订阅后的相关函数
* */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

class MiddleWare extends React.Component {
  render() {
    return (
      <div>
        <div>
          { this.props.counter }
        </div>
        <div>
          { this.props.user.join(',')}
        </div>
        <button onClick={ () => this.props.increment(3) }>+</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}
const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(actions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MiddleWare);
