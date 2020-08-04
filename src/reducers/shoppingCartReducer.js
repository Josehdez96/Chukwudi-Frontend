import { ADD_TO_CART, GET_TOTAL } from '../types/shoppingCartTypes';

const INITIAL_STATE = {
  shoppingCart: [],
  totalPriceCart: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, shoppingCart: action.payload };

    case GET_TOTAL:
      return { ...state, totalPriceCart: action.payload };

    default:
      return state;
  }
};
