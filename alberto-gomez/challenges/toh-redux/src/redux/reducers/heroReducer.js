export default function heroReducer(state = [], action) {
	debugger;
	switch (action.type) {
		case 'ADD_HERO':
			return [...state, action.hero];
		case 'LOAD_HEROES':
			return [...state, action.payload];
		default:
			return state;
	}
}
