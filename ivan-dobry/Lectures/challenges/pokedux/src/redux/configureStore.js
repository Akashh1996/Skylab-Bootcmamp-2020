import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function configureStore(initialState) {
	const composeEnhancers =
		window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	return createStore(
		rootReducer,
		initialState,
		composeEnhancers(applyMiddleware(thunk))
	);
}
