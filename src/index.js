import React from 'react';
import App from './app';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { counter, user } from './ReduxDemo/reducer';
import reduxLogger from 'redux-logger';

const logger = store => next => action => {
  console.log('打印日志', store.getState().counter);
  const result = next(action);
  console.log('打印日志', store.getState().counter);
  return result;
}
const is5 = store => next => action => {
  if (store.getState().counter > 5) {
    return;
  }
  return next(action);
}
const store = createStore(combineReducers({
  counter,
  user,
}), {}, applyMiddleware(logger, is5, reduxLogger, thunk));


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
