import {
  NOW,
  ONE_HOUR,
  FIVE_HOURS,
  TWENTYFOUR_HOURS,
} from '../types/deliveryTimeTypes';

const INITIAL_STATE = {
  deliveryTime: ['Now', 'now'],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOW:
      return { ...state, deliveryTime: action.payload };

    case ONE_HOUR:
      return { ...state, deliveryTime: action.payload };

    case FIVE_HOURS:
      return { ...state, deliveryTime: action.payload };

    case TWENTYFOUR_HOURS:
      return { ...state, deliveryTime: action.payload };

    default:
      return state;
  }
};
