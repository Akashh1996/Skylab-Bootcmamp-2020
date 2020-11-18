import { createStore, compose, applyMiddleware } from 'redux';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	return createStore(
		rootReducer,
		initialState,
		composeEnhancers(applyMiddleware(thunkMiddleware))
	);
}
