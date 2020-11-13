import actionTypes from '../actions/action-types';

export default function heroReducer(state = [], action) {
	switch (action.type) {
		case actionTypes.ADD_HERO:
			return action.heroList;
		case actionTypes.DELETE_HERO:
			return action.heroList;
		case actionTypes.CHARGE_HEROES:
			return [...state, ...action.heroesList];
		default:
			return state;
	}
}
