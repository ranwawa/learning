import React from "react";

export default class extends React.Component {
  lifecycle = [];
  constructor() {
    super();
    this.state = {
      stateLifecycle: [],
    };
  }
  updateLifecycle(step, str) {
    console.log(step, str);
    this.lifecycle.push(str);
    this.setState({
      stateLifecycle: this.lifecycle,
    });
  }
  componentWillMount() {
    this.updateLifecycle(1, "componentWillMount, 即将挂载");
  }
  componentDidMount() {
    this.updateLifecycle(2, "componentDidMount, 挂载成功");
  }
  componentWillUnmount() {
    this.updateLifecycle("componentDidMount, 即将卸载");
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(4, "shouldComponentUpdate, 是否可以更新组件");
    return this.lifecycle.length < 5;
  }
  componentWillReceiveProps(nextProps, nextContext) {
    this.lifecycle.push("修改props");
    this.setState({
      stateLifecycle: this.lifecycle,
    });
    console.log(3, "componentWillReceiveProps, 即将更新props");
  }
  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log(5, "componentWillUpdate, 组件即将更新");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(6, "componentDidUpdate, 组件更新完成");
  }
  updateState() {
    this.lifecycle.push("修改state");
    this.setState({
      stateLifecycle: this.lifecycle,
    });
  }
  render() {
    const computedLifecycle = this.state.stateLifecycle;
    return (
      <div>
        {this.props.title}
        <ul>
          {computedLifecycle.map((ele, key) => (
            <li key={key}>
              {key + 1}-{ele}
            </li>
          ))}
        </ul>
        <div>
          {computedLifecycle.length}
          <span onClick={this.updateState.bind(this)}>修改数量</span>
        </div>
      </div>
    );
  }
}
