/*
* 什么是组合
*   - 组合其实就像是vue中的插槽
*   - 区别在于,react中是通过父组件将组合内容做为一个对象传进来的
* 为什么在left里面放入当前组件会失效? <Compose left={ Compose } > 在子组件里面this.props.left无法第一次
* */

import React from 'react';
export default class Compose extends React.Component {
  render() {
    return (
      <div>
        <div className="compose">
          { this.props.children }
          { this.props.left }
        </div>
      </div>
    );
  }
}
