import { combineReducers } from 'redux';

import showOrderMenuReducer from './showOrderMenuReducer';
import personCounterReducer from './personCounterReducer';
import shoppingCartReducer from './shoppingCartReducer';

export default combineReducers({
  showOrderMenuReducer,
  personCounterReducer,
  shoppingCartReducer,
});
