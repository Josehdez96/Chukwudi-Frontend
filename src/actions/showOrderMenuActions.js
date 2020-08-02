import { SHOW_HIDE } from '../types/showOrderMenuTypes';

export const changeOrderMenuState = (showOrderMenu) => (dispatch) => {
  dispatch({
    type: SHOW_HIDE,
    payload: !showOrderMenu,
  });
};
