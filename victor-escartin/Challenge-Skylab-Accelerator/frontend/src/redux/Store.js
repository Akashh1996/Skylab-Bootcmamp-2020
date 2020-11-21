/* eslint-disable import/no-extraneous-dependencies */
import {
  createStore, compose, applyMiddleware, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import {
  projectCreateReducer,
  projectDeleteReducer,
  projectDetailsReducer,
  projectListReducer,
  projectUpdateReducer,
} from './reducers/projectReducers';
import {
  userRegisterReducer,
  userSigninReducer,
} from './reducers/userReducer';

const initialState = {};
const reducer = combineReducers({
  projectList: projectListReducer,
  projectDetails: projectDetailsReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  projectCreate: projectCreateReducer,
  projectUpdate: projectUpdateReducer,
  projectDelete: projectDeleteReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
