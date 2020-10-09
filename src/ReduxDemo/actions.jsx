export const increment = (num = 1) => {
  return {
    type: 'increment',
    num,
  };
};
export const incrementAsync = () => {
  return (dispatch) => {
    dispatch({
      type: 'loading'
    });
    setTimeout(() => dispatch({
      type: 'increment',
      num: 3,
    }), 1000);
  };
};
export const decrement = (num = 1) => {
  return {
    type: 'decrement',
    num,
  };
};
export const addUser = () => {
  return {
    type: 'addUser',
  };
};
