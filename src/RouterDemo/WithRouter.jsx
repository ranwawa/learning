/*
 * 为什么需要withRouter
 *   如果当前组件没有放到<Route>组件里面的话,就无法获取路由相关对象
 *   用这个函数包裹一下即可
 *  为什么函数式组件无法使用withRouter????
 *  为什么第14行绑定this,无法起作用?
 * */
import React from 'react';
import { withRouter, BrowserRouter, Route } from 'react-router-dom';

class Child extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('c', this.props);
  }
  render() {
    return (
      <div>
        withrouterrrrrrrrrrrrr
        <button onClick={this.handleClick.bind(this)}>点击按钮</button>
      </div>
    );
  }
}

const ChildWithRouter = withRouter(Child);
function Parent(props) {
  return (
    <BrowserRouter>
      <Route
        path="/home"
        component={Child}
      />
      {/* 这个组件内部无法获取路由相关信息 */}
      <Child />
      <ChildWithRouter />
    </BrowserRouter>
  );
}
export default Parent;

