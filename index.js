/*
 * State
 * Dispatch Action
 * Reducer
 * Action
 */

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

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    alert(i);
  }, 1000 + i);
}
