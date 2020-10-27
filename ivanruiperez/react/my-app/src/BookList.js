import React from 'react';
import BookItem from './BookItem';

function BookList({ books }) {
	return (
		<ul>
			{books.map((tittle) => (
				<BookItem tittle={tittle} key={tittle} />
			))}
		</ul>
	);
}
export default BookList;
