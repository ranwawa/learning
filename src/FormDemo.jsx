/*
 * 受控组件和非受控组件
 *   - 为什么会有非受控组件
 *     - 因为每个表单元素都要添加一个change事件,太过于麻烦
 * */
import React from 'react';

export default class FormDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </div>
    );
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
}
