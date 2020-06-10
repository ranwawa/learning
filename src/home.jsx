/**
 * @file
 * @version 0.0.1
 * @author 冉娃娃 <274544338@qq.com>
 * @since 2020/6/8 8:43
 */
import React from "react";
export default class Home extends React.Component {
  render() {
    {
      /* 注释外面必须加花括号,因为js语法必须被花括号括起来 */
    }
    console.log(this.props); // 所有传入的属性
    // 子组件里面无法修改props的值
    return (
      <div>
        <div>
          {this.props.title.split("").map((ele) => (
            <div key={ele}>
              {ele}
              -----
              {this.props.appendix}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
