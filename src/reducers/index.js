import { combineReducers } from 'redux';

import showOrderMenuReducer from './showOrderMenuReducer';
import personCounterReducer from './personCounterReducer';
import shoppingCartReducer from './shoppingCartReducer';
import deliveryTimeReducer from './deliveryTimeReducer';

export default combineReducers({
  showOrderMenuReducer,
  personCounterReducer,
  shoppingCartReducer,
  deliveryTimeReducer,
});
