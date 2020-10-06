/*
 * react引入组件有几种方式
 *   - import一个jsx,然后放到render里面
 *   - 直接声明一个有返回值的函数,然后放到render里面
 * 什么是状态提升
 *   - 其实就是把多个子组件共享的数据,提升到最近的父组件,统一用props来操作
 * 为什么需要状态提升
 *   - 降低后期的bug调试及维护难度
 * */
import React from 'react';
import TemperatureInput from './TemperatureInput';

const BoilingVerdict = (props) => {
  return props.celsius > 100 ? '水沸腾了' : '水是温的';
};
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = { temperature: '' };
  }
  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }
  render() {
    // 每次数据改变,整个render函数都会重新运行一次
    const { scale , temperature } = this.state;
    console.log(scale, temperature);
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;    
    return (
      <div>
        <TemperatureInput
          scaleName="f"
          temperature={fahrenheit}
          handleTemperatureChange={this.handleFahrenheitChange.bind(this)}
        />
        <TemperatureInput
          scaleName="c"
          temperature={celsius}
          handleTemperatureChange={this.handleCelsiusChange.bind(this)}
        />
        <div>
          <BoilingVerdict celsius={this.state.temperature} />
        </div>
      </div>
    );
  }
  handleChange = (value) => {
    this.setState({ temperature: value });
  };

}
