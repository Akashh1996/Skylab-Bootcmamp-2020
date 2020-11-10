export default function heroReducer(state = [], action) {
	switch (action) {
		case 'LOAD_HERO':
			return action.heroes;
		case 'ADD_HERO':
			return [...state, action.heroes];
		case 'DELETE_HERO':
			return state.filter((hero) => hero.id !== action.hero.id);
		default:
			break;
	}
}
