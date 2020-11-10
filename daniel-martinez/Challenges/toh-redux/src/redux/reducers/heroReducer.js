export default function heroReducer(state = [], action) {
	switch (action.type) {
		case 'ADD_HERO':
			return [...state, action.hero];

		case 'DELETE_HERO':
			return state.filter((hero) => hero.id !== action.hero.id);

		case 'GET_HEROES':
			return action.heroes;

		default:
			return state;
	}
}
