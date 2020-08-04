import {
  NOW,
  ONE_HOUR,
  FIVE_HOURS,
  TWENTYFOUR_HOURS,
} from '../types/deliveryTimeTypes';

export const addNowTime = () => (dispatch) => {
  dispatch({
    type: NOW,
    payload: ['Now', 'now'],
  });
};

export const addOneHourTime = () => (dispatch) => {
  dispatch({
    type: ONE_HOUR,
    payload: ['1 hr', 'oneHour'],
  });
};

export const addFiveHoursTime = () => (dispatch) => {
  dispatch({
    type: FIVE_HOURS,
    payload: ['5 hr', 'fiveHours'],
  });
};

export const addTwentyfourHoursTime = () => (dispatch) => {
  dispatch({
    type: TWENTYFOUR_HOURS,
    payload: ['24 hr', 'twentyfourHours'],
  });
};
