import { INCREMENT, DECREMENT, ADD_USER } from './constant';
export const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.num;
    case DECREMENT:
      return state - action.num;
    case 'loading':
      return 'loading';
    default:
      return state;
  }
};

export const user = (state = [], action) => {
  switch(action.type) {
    case ADD_USER:
      state.push('rww');
      return JSON.parse(JSON.stringify(state));
    default:
      return  ['a', 'b'];
  }
}

