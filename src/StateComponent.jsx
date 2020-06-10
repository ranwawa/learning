import React from "react";

export default class extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      flag: true,
      age: 30,
    };
  }
  increment() {
    // 必须让this指向组件实例
    // 要么在jsx中使用bind语法
    // 要么使用箭头函数
    console.log(this.__proto__.constructor.name);
    // 设置状态时必须使用setState函数
    // this.state.age += 1;
    this.setState({
      age: this.state.age + 1,
    });
  }
  decrement = () => {
    this.setState({
      age: this.state.age - 1,
    });
  };
  changeFlagValue = () => {
    this.setState({
      flag: !this.state.flag,
    });
  };
  render() {
    let computedName = this.state.flag ? "flag为true" : "flag为false";
    return (
      <div>
        {/* render函数里面调用状态,函数时都必须加上this 
           在render函数里面定义的变量,就不用this调用了
        */}
        <div>{this.state.age}</div>
        <div onClick={this.increment.bind(this)}>加大年龄</div>
        <div onClick={this.decrement}>减少年龄</div>
        <div>{computedName}</div>
        <div onClick={this.changeFlagValue}>改变flag的值试试</div>
      </div>
    );
  }
}
