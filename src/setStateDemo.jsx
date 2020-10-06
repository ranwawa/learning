/*
 * 同步还是异步
 * 为什么要异步
 * 如何获取更改后的值
 * 什么情况下是同步
 * */
import React from 'react';

export default class SetStateDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 1,
    };
  }
  render() {
    return (
      <div>
        state数字: {this.state.number}
        <button onClick={this.handleClick.bind(this)}>修改数字</button>
      </div>
    );
  }
  handleClick() {
    console.log('更新之前的值', this.state.number);
    this.setState({
      number: this.state.number + 1,
    }, (e) => {
      console.log('页面显示的值', this.state.number);
    });
    console.log('更新之后的值', this.state.number);
  }
}
