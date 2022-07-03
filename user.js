const { createStore } = require('redux');

const ADD_USER = 'ADD_USER';

const initialState = {
  count: 1,
  users: ['Syed'],
};

const addUserAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      };

    default:
      state;
  }
};

const store = createStore(userReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUserAction('Monir'));
store.dispatch(addUserAction('Alam'));
