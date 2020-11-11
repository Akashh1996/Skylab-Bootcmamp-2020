import actionTypes from '../actions/action-types';

export default function idReducer(state = 21, action) {
	switch (action.type) {
		case actionTypes.INCREMENT_ID:
			const newId = state + 1;
			return newId;
		default:
			return state;
	}
}
