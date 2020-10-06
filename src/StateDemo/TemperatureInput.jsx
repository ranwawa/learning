import React from 'react';

const scaleNames = {
  c: '摄氏度',
  f: '华氏度',
};
export default class TemperatureInput extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <fieldset>
        <legend>请输入{ scaleNames[this.props.scaleName ]}</legend>
        <input
          type="number"
          value={this.props.temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
  handleChange = (e) => {
    this.props.handleTemperatureChange(e.target.value);
  };
}
