import { combineReducers } from 'redux';
import userReducer from './userReducer';
import spotReducer from './spotReducer';
import listReducer from './listReducer';
import authReducer from './authReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  userReducer, spotReducer, listReducer, authReducer, formReducer,
});

export default rootReducer;
