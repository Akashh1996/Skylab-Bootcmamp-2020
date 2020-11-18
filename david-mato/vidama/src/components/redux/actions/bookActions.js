import axios from 'axios';

export async function loadBooks(dispatch) {
	const url =
		'https://www.googleapis.com/books/v1/users/105182753175439470633/bookshelves/1001/volumes?startIndex=0&maxResults=40';
	const response = await axios(url);
	dispatch({ type: 'LOAD_BOOKS', books: response.data });
}
