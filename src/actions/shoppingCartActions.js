import { ADD_TO_CART } from '../types/shoppingCartTypes';

export const addToCart = (element) => (dispatch, getState) => {
  const { shoppingCart } = getState().shoppingCartReducer;

  /* 
  La siguiente linea nos permite añadir productos al carrito de compra, 
  si no hacemos esto, al añadir un producto se sobreescribe el estado
  */
  const updatedShoppingCart = [...shoppingCart, element];

  dispatch({
    type: ADD_TO_CART,
    payload: updatedShoppingCart,
  });

  alert('¡Añadiste un producto al carrito!');
};
