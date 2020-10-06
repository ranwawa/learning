/*
* antd初体验
* 为什么style要用对象形式,而不能直接用字符串形式?
* */
import React, { useState } from 'react';
import {  ConfigProvider, DatePicker, message } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');
export const AntdDemo = () => {
  const [date, setDate ] = useState(null);
  const handleChange = value => {
    message.info(`你选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
    setDate(value);
  }
  return (
    <ConfigProvider locale={zhCN}>

      <div style={{ width: 400, margin: '100px auto'}}>
        <DatePicker onChange={handleChange}/>
      </div>
    </ConfigProvider>
  )
}
