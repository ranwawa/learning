import React from "react";
import Home from "./home";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <h2>学习,学习,努力学习.</h2>
        <Home title="传入的标题" appendix="后缀" />
      </div>
    );
  }
}
