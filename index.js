/*
 * State
 * Dispatch Action
 * Reducer
 * Action
 */

const { createStore } = require('redux');

// Defining Constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// state
const initialCounterState = {
  count: 0,
};

// Action is Object it has two thing type, payload

// INCREMENT  - Counter
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

// DECREMENT  - Counter
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

// Reducer

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
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

// Dispatch action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
