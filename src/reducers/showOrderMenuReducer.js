import { SHOW_HIDE } from '../types/showOrderMenuTypes';

const INITIAL_STATE = {
  showOrderMenu: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_HIDE:
      return { ...state, showOrderMenu: action.payload };

    default:
      return state;
  }
};
