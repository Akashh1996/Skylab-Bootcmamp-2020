export default function booksReducer(state = [], action) {
	switch (action.type) {
		case 'LOAD_BOOKS':
			return [...state, action.books];

		default:
			return state;
	}
}
