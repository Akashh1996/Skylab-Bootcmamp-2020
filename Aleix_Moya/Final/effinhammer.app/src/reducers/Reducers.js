const initialState = {};
export default function heroReducer(state = initialState, action) {
	switch (action.type) {
		/*case 'ADD_WEAPON':
			return [...state, action.weapon];
		case 'DELETE_WEAPON':
			return state.filter((weapon) => weapon.name !== action.weapon.name);*/
		case 'LOAD_WARGEAR':
			return { ...state, weapons: action.wargear };
		default:
			return state;
	}
}
