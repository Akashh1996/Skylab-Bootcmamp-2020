import actionTypes from '../actions/actionTypes';

export default function heroReducer(state = [], action) {
	switch (action.type) {
		case actionTypes.ADD_HERO:
			return [...state, action.hero];
		default:
			return state;
	}
}
