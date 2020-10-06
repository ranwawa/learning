/*
 * 受控组件和非受控组件
 *   - 为什么会有非受控组件(类似于vue里面的v-model)
 *     - 因为每个表单元素都要添加一个change事件,太过于麻烦
 *   - 名字为什么要取成受控与非受控呢?
 * */
import React from 'react';

export default class FormDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
    this.username = React.createRef();
  }
  render() {
    return (
      <div>
        年龄<input type="number" value={this.state.value} onChange={this.handleChange}/>
        姓名<input type="text" ref={ this.username }/>
        <button onClick={ this.handleClick.bind(this) }>输出结果</button>
      </div>
    );
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  handleClick() {
    console.log('用户名', this.username.current.value);
    console.log('年龄', this.state.value);
  }
}
