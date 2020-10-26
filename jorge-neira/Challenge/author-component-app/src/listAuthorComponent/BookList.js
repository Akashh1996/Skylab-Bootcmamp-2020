import React from 'react';
import BookItem from './BookItem';

function BookList({ books, item }) {
	return (
		<ul>
			{books.map((title) => (
				<BookItem title={title} />
			))}
		</ul>
	);
}

export default BookList;
