/* istanbul ignore file */
import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

export default function configureStore(initialState: Object) {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunkMiddleware)),
  );
}
