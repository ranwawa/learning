/*
 * react-redux是什么
 *   - 是基于redux在react中的应用
 * 为什么需要react-redux
 *   - 直接使用redux,需要手动的在props里面传参.非常麻烦
 *   - 复用react-redux,可以直接用provider 和 connect自动连接
 *   - 当state或props发生变化时,视力会自动响应
 * react-redux的操作步骤
 *   - 根组件外面包裹一个Provider组件
 *   - 组件的store属性就传递一个store实例
 *   - 然后需要动态绑定state的组件,用connect函数进行链接
 *   - connect的第一个参数是state用于显示值,第2个参数是dispatch用于修改值
 * */
import React from 'react';
import { connect } from 'react-redux';

class ReactRedux extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        store的值是: {this.props.counter}
        <button onClick={ this.props.increment }>加1</button>
        <button onClick={ this.props.decrement }>减1</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReactRedux);
