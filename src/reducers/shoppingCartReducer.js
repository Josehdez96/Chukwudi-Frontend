import { COUNTER_CART } from '../types/shoppingCartTypes';

const INITIAL_STATE = {
  shoppingCart: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COUNTER_CART:
      return { ...state, shoppingCart: action.payload };

    default:
      return state;
  }
};
