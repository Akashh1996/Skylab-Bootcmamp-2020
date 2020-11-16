const initialState = {
	pending: false,
	products: [],
	error: null
};
export default function heroReducer(state = initialState, action) {
	switch (action.type) {
		case 'ADD_HERO':
			return [...state, action.hero];
		case 'DELETE_HERO':
			return state.filter((hero) => hero.id !== action.hero.id);
		case 'WAITING_DATA':
			return {
				...state,
				pending: true
			};
		case 'LOAD_COINS':
			return {
				...state,
				pending: false,
				products: action.payload
			};
		case 'COINS_ERROR':
			return {
				...state,
				pending: false,
				error: action.error
			};
		default:
			return state;
	}
}
export const getCoins = (state) => state.products;
export const getCoinsPending = (state) => state.pending;
