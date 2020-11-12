import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateIvariant from 'redux-inmutable-state-invariant';
import rootReducer from './reducers';

export default function configureStore(initialState) {
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	return createStore(
		rootReducer,
		initialState,
		composeEnhancers(applyMiddleware(reduxImmutableStateIvariant()))
	);
}
