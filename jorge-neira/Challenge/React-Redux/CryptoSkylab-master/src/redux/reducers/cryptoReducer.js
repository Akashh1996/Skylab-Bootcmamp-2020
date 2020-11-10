import actionTypes from '../redux-types';

export default function cryptoReducer(state = {}, action) {
	debugger;
	switch (action.type) {
		case actionTypes.LOAD_COINS_LIST:
			return { ...state, currencyList: action.payload };
		case actionTypes.ERROR_LOADING_DATA:
			debugger;
			break;
		default:
			return state;
	}
}
