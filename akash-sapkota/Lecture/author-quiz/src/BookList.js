import React from 'react';
import BookItem from './BookItem';

function BookList({ books }) {
	return (
		<ul>
			{books.map((title) => (
				<BookItem title={title} />
			))}
		</ul>
	);
}

export default BookList;
