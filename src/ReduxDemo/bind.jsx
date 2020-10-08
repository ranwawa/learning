/*
 * 合并action和reducer
 * bindActionCreators是什么
 *   - 用来合并action的,即dispatch这个函数
 *   - 之前的操作需要手动在mapDispatchToProps里面编写
 *   - 这样就只需要传入原始的action函数
 * bindActionCreators的操作步骤
 *   - 编写actions文件
 *   - 从redux中引入bindActionCreator
 *   - 复用bindActionCreator创建mapDispatchToProps函数
 *   - 将创建后的函数传递给connect函数的第2个参数即可
 * 注意事项
 *   - actions里面的每一个操作,都要写成函数.
 *   - 这样就可以接受额外的参数了
 *
 *
 * combineReducers是什么
 *   - 和bindActionCreators是一样的作用,只是后者用于合并action,前者用于合并reduce
 *   - 也是为了减轻手动编码压力的语法糖
 * 注意事项
 *   - 在state为数组对象时,需要引用值发生变化才会触发视图更新
 * 操作步骤
 *   - 从redux中引入combineReducers
 *   - 编写多个reducer
 *   - 再用combineReducers函数合并需要的reducer
 *   - 最后通过createStore函数,将合并后的结果生成一个仓库
 * */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';

class Bind extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        state的值是: {this.props.counter}
        <button onClick={ () => this.props.increment(5) }>+</button>
        <button onClick={ () => this.props.decrement(3) }>-</button>
        <div>
          { this.props.user.map(ele => ele)}
        </div>
        <button onClick={ () => this.props.addUser() }>添加用户</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(actions, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Bind);
