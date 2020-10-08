import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Store from './ReduxDemo/Store';
import App from './app';

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const reducer = (state = 0, action) => {
  console.log(action.type);
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
const store = createStore(reducer);

const render = () => {
  ReactDOM.render(<Store
    clickIncrement={ () => store.dispatch({ type: INCREMENT })}
    clickDecrement={ () => store.dispatch({ type: DECREMENT })}
    value={ store.getState() }
  />, document.getElementById('root'));
};
render();
store.subscribe(() => render())

