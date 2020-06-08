import React from 'react';
import ReactDOM from 'react-dom';

const name = 'React';
const element = (
  <div>
    <h1>Hello {name}</h1>
    <h2>现在是 {new Date().toLocaleString()}</h2>
  </div>
);
ReactDOM.render(element, document.getElementById('root'));

