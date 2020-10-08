import React from 'react';
import App from './app';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { counter, user } from './ReduxDemo/reducer';

const store = createStore(combineReducers({
  counter,
  user,
}));

// const render = () => {
//   ReactDOM.render(<Store
//     clickIncrement={ () => store.dispatch({ type: INCREMENT })}
//     clickDecrement={ () => store.dispatch({ type: DECREMENT })}
//     value={ store.getState() }
//   />, document.getElementById('root'));
// };
// render();
// store.subscribe(() => render())

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'));
