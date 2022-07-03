const { createStore, combineReducers } = require('redux');

////////    CONSTANTS
// Product
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCTS = 'ADD_PRODUCTS';

// Cart
const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEM = 'ADD_CART_ITEM';

////////    State
// Product
const initialProductState = {
  products: ['sugar', 'salt'],
  numberOfProducts: 2,
};

// Cart
const initialCartState = {
  cart: ['sugar'],
  numberOfCartItems: 1,
};

////////    Action
// Product
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProduct = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};

// Cart
const getCart = () => {
  return {
    type: GET_CART_ITEMS,
  };
};
const addCart = (product) => {
  return {
    type: ADD_CART_ITEM,
    payload: product,
  };
};

//////////    Reducer
// Product
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

// Cart
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };
    case ADD_CART_ITEM:
      return {
        cart: [...state.cart, action.payload],
        numberOfCartItems: state.numberOfCartItems + 1,
      };

    default:
      return state;
  }
};

// Store

const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

const store = createStore(rootReducer);
// const store = createStore(productReducer);
// const store = createStore(cartReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// Product
store.dispatch(getProducts());
store.dispatch(addProduct('Rice'));

// Cart
store.dispatch(getCart());
store.dispatch(addCart('Rice'));
