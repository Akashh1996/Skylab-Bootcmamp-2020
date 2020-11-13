export default function heroReducer(state = [], action) {
	switch (key) {
		case 'ADD_HERO':
			return [...state, action.hero];
		case 'ADD_HERO':
			return state.filter((hero) => hero.id !== action.hero.id);

		default:
			return state;
	}
}
