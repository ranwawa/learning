import React from "react";
import PropTypes from './PropTypes';
// import Compose from './Compose';
// import Calculator from './StateDemo/Calculator';
// import FormDemo from './FormDemo';
// import RefAndDom from './RefAndDom';
// import KeyDemo from './KeyDemo';
// import IfDemo from './IfDemo';
// import StateComponent from './StateComponent';
// import LifecircleComponent from "./lifecircleComponent";
// import SetStateDemo from './setStateDemo';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "生命周期",
    };
  }
  handleClickProps = () => {
    this.setState({
      title: "修改后的生命周期标题",
    });
  };
  render() {
    return (
      <div>
        <PropTypes userName="你是认证" age={ 23 } sex="女"/>
        {/*<Compose left={ <Calculator /> }>*/}
        {/*  <span>这个是组合</span>*/}
        {/*</Compose>*/}
        {/*<Calculator />*/}
        {/*<FormDemo />*/}
        {/*<RefAndDom />*/}
        {/*<KeyDemo />*/}
        {/*<IfDemo />*/}
        {/*<SetStateDemo />*/}
        {/*<LifecircleComponent title={this.state.title} />*/}
        {/*<div onClick={this.handleClickProps}>修改标题</div>*/}
      </div>
    );
  }
}
