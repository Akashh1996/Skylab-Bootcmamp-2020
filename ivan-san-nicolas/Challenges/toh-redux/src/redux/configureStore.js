import { applyMiddleware, compose, createStore } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from './reducer/index';

export default function configureStore(initialState) {
	const composeEnhancer =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	return createStore(
		rootReducer,
		initialState,
		composeEnhancer(applyMiddleware(reduxImmutableStateInvariant()))
	);
}
