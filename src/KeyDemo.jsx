/*
 * 列表渲染
 * 如何肉眼判断有无key值进行重新绘制的性能差异
 *  - 试着用chorme的性能分析试试两者的差异
 * */
import React from 'react';

export default class KeyDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      userList: [
        {
          name: 'rww',
          age: 33,
          job: ['老板', '帅哥'],
        },
        {
          name: 'qw',
          age: 26,
          job: ['美女', '女神'],
        },
      ],
    };
  }
  render() {
    return (
      <div>
        {
          this.state.userList.map(ele => {
            return <div>
              <span> name: {ele.name} </span>
              <span> age: {ele.age} </span>
              <span> job: {ele.job.map(item => item + ',')}</span>
            </div>;
          })
        }
        <button onClick={ this.pushUser }>新增一项</button>
      </div>
    );
  }
  pushUser = () => {
    this.state.userList.push({
      name: '周毛重',
      age: 2,
      job: ['宝宝', '阔爱'],
    })
    this.setState({
      userList: this.state.userList
    })
  }
}

