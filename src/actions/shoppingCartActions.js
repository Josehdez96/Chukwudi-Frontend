import { COUNTER_CART } from '../types/shoppingCartTypes';

export const addOrRemoveToCart = () => (dispatch) => {
  dispatch({
    type: COUNTER_CART,
    payload: 1,
  });
};
