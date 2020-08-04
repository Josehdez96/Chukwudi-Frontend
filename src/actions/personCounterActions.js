import { COUNTER } from '../types/personCounterTypes';

export const addPerson = (actual_counter) => (dispatch) => {
  dispatch({
    type: COUNTER,
    payload: actual_counter + 1,
  });
};

export const substractPerson = (actual_counter) => (dispatch) => {
  if (actual_counter <= 1) {
    alert('No puedes ordenar para menos de una persona!');
    dispatch({
      type: COUNTER,
      payload: 1,
    });
  } else {
    dispatch({
      type: COUNTER,
      payload: actual_counter - 1,
    });
  }
};
