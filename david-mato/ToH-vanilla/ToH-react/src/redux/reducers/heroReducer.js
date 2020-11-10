export default function heroReducer(state = [], action) {
	switch (action.type) {
		case 'ADD_HERO':
			const coso = [...state, action.hero];
			debugger;
			return coso;
		case 'DELETE_HERO':
			return state.filter((hero) => hero.id !== action.hero.id);
		default:
			return state;
	}
}
