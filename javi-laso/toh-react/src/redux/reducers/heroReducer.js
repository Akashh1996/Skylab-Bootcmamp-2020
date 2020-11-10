export default function heroReducer(state = [], action) {
	switch (action.type) {
		case 'ADD_HERO':
			return [...state, action.hero];
		case 'DETELE_HERO':
			return state.filter((hero) => hero.id !== action.hero.id);

		default:
			return state;
	}
}
