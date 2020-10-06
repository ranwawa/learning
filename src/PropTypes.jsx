/*
* props验证
*   - 就和vue里面props中的validate一样
*   - 区别在于抽离成第3方实现
*   - 只在开发时生效,build之后无效
* */

import React from 'react';
import types from 'prop-types';
export default class PropTypes extends React.Component {
  render() {
    return (
      <div>
        姓名: { this.props.userName }
        性别: { this.props.sex }
        年龄: { this.props.age }
      </div>
    );
  }
}

PropTypes.propTypes = {
  age: types.number.isRequired,
  userName: types.string,
}
PropTypes.defaultProps = {
  sex: '男',
}
