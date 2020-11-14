import { combineReducers } from 'redux';
import books from './booksReducers';

const rootReducer = combineReducers({
	books
});

export default rootReducer;
