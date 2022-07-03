const { createStore } = require('redux');

// State
// Action == Action is Object it has two thing type, payload
// Reducer
// Store

// Constant
const INCREMENT = 'INCREMENT';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// State
const initialState = {
  count: 0,
};

// Action
// Payload er maddome data recieve kore
const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};
const incrementByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};
const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};
const resetAction = () => {
  return {
    type: RESET,
  };
};

// Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      state;
  }
};

// Store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(decrementAction());
store.dispatch(incrementAction());
store.dispatch(resetAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementByValue(10));
