/*
 * 通过引用直接操作DOM
 * 为什么数据驱动下还需要直接操作dom呢?
 *   - 一些额外场景需要,比如获取音视频相关信息
 *   - 比如集成第3方的dom库
 * 为什么需要先创建实例,然后再绑定到html节点上呢?像vue那样自动注册存在什么问题吗?
 * */
import React from 'react';

export default class RefAndDom extends React.Component {
  constructor() {
    super();
    this.divDemo = React.createRef();
  }
  componentDidMount() {
    setTimeout(() => {
      this.divDemo.current.style.color = 'red';
    }, 1688)
  }
  render() {
    return (
      <div ref={ this.divDemo }> 这是一个ref </div>
    );
  }
}
