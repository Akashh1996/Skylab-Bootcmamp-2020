import { combineReducers } from 'redux';
import productReducer from './productReducers';

const rootReducer = combineReducers({
  productReducer,
});

export default rootReducer;
