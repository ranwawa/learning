/*
 * 条件渲染
 * */
import React from 'react';

export default class IfDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
      name: '',
    };
  }
  render() {
    return (
      <div>
        {
          this.state.name ?
            <div>
              {this.state.name}
              <button onClick={this.logout}> 退出 </button>
            </div> :
            <button onClick={this.login}>请登录</button>
        }
      </div>
    );
  }
  login = () => {
    this.setState({
      name: 'rww',
    });
  };
  logout = () => {
    this.setState({
      name: ''
    })
  }
}
