export default function heroReducer(state = [], action) {
	switch (state) {
		case 'ADD_HERO':
			return [...state, action.hero];
		case 'DELETE_HERO':
			return state.filter((hero) => hero.id !== action.hero.id);
		default:
			return state;
	}
}
