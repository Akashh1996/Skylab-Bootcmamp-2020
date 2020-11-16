export default function heroReducer(state = [], action) {
	switch (action.type) {
		case 'LOAD_HEROES':
			return [...state, ...action.heroes]
		case 'ADD_HERO':
			return action.heroes;
		case 'DELETE_HERO':
			return action.heroes;
		default:
			return state;
	}
}
