import React from "react";
// import LifecircleComponent from "./lifecircleComponent";
import SetStateDemo from './setStateDemo';
// import StateComponent from './StateComponent';
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
        {/*<LifecircleComponent title={this.state.title} />*/}
        {/*<div onClick={this.handleClickProps}>修改标题</div>*/}
        <SetStateDemo />
      </div>
    );
  }
}
