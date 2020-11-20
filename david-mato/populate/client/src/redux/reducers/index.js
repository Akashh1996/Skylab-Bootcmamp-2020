/* istanbul ignore file */
import { combineReducers } from 'redux';
import userList from './userListReducer';

const rootReducer = combineReducers({
  userList,
});

export default rootReducer;
