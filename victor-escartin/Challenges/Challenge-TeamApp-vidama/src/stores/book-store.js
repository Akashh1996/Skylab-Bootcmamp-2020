import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';
import { EventEmitter } from 'events';

const CHANGE = 'CHANGE';
let _books;
let _book;
let _users;

class BookStore extends EventEmitter {
	getBooks() {
		return _books;
	}

	setBooks(value) {
		_books = value;
	}

	getBook() {
		return _book;
	}
	setBook(value) {
		_book = value;
	}

	getUsers() {
		return _users;
	}

	addEventListener(callback) {
		this.on(CHANGE, callback);
	}

	removeEventListener(callback) {
		this.removeListener(CHANGE, callback);
	}

	emitChange() {
		this.emit(CHANGE);
	}
}

const bookStore = new BookStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_BOOK:
			_book = action.payload;
			bookStore.emitChange();
			break;

		case actionTypes.LOAD_BOOKS:
			_books = action.payload;
			bookStore.emitChange();
			break;

		case actionTypes.LOAD_USERS:
			_users = action.payload;
			bookStore.emitChange();
			break;

		default:
			break;
	}
});

export default bookStore;
