import actionTypes from './action-types';
import dispatcher from '../dispatcher/dispatcher';

const genres = [
	{
		firstArticle: {
			image:
				'https://www.indiewire.com/wp-content/uploads/2019/03/Us-3.jpg?w=780',
			title: 'Horror'
		},
		secondArticle: {
			image:
				'https://i.pinimg.com/originals/5a/95/ca/5a95ca02bd3f9bc1424f5739b6c87fce.jpg',
			title: 'Fantasy'
		}
	},
	{
		firstArticle: {
			image:
				'https://breakinginthehabit.files.wordpress.com/2016/11/romance-box-1b75442dcb3e05ccbc614455b5ac2670.jpg',
			title: 'Romance'
		},
		secondArticle: {
			image:
				'https://adventure.com/wp-content/uploads/2020/03/Scotland-Helen-Ochyra-visitscotland_38462184993-1180x664.jpg',
			title: 'Adventure'
		}
	},
	{
		firstArticle: {
			image:
				'https://galaxypress.com/wp-content/uploads/2018/12/Best-Mystery-Books.jpg',
			title: 'Mystery'
		},
		secondArticle: {
			image:
				'https://mymodernmet.com/wp/wp-content/uploads/2018/09/encyclopedia-sci-fi.jpg',
			title: 'Fiction'
		}
	}
];

export async function loadUsers() {
	const url = '/api/users.json';
	const response = await fetch(url);
	const users = await response.json();

	dispatcher.dispatch({
		type: actionTypes.LOAD_USERS,
		payload: users
	});
}

export function loadGenres() {
	return genres;
}

export async function loadBook(bookId) {
	const url = `https://www.googleapis.com/books/v1/volumes/${bookId}`;
	const response = await fetch(url);
	const book = await response.json();

	dispatcher.dispatch({
		type: actionTypes.LOAD_BOOK,
		payload: book
	});
}

export async function loadBooks() {
	const url =
		'https://www.googleapis.com/books/v1/users/105182753175439470633/bookshelves/1001/volumes?startIndex=0&maxResults=40';
	const response = await fetch(url);
	const books = await response.json();

	dispatcher.dispatch({
		type: actionTypes.LOAD_BOOKS,
		payload: books
	});
}
