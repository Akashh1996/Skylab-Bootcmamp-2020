import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';
import heroReducer from './heroReducer';

const rootReducer = combineReducers({
  heroesReducer,
  heroReducer,
});

export default rootReducer;
