import { COUNTER } from '../types/personCounterTypes';

const INITIAL_STATE = {
  personCounter: 1,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COUNTER:
      return { personCounter: action.payload };

    default:
      return state;
  }
};
