import reduxActionTypes from '../redux-types';

export default function cryptoReducer(state = [], action) {
	debugger;
	switch (action.type) {
		case reduxActionTypes.LOAD_COINS_LIST:
			return [...state, action];
		default:
			return state;
	}
}
