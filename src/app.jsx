import React from "react";
import RefAndDom from './RefAndDom';
// import FormDemo from './FormDemo';
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
        <RefAndDom />
        {/*<FormDemo />*/}
        {/*<KeyDemo />*/}
        {/*<IfDemo />*/}
        {/*<SetStateDemo />*/}
        {/*<LifecircleComponent title={this.state.title} />*/}
        {/*<div onClick={this.handleClickProps}>修改标题</div>*/}
      </div>
    );
  }
}
