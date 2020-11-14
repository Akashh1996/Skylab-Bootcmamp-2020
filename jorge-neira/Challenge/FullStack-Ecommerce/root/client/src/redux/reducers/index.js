import { combineReducers } from 'redux';
import products from './asusReducers';

const rootReducer = combineReducers({
  products,
});

export default rootReducer;
