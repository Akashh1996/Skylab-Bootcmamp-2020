import React from 'react';
import BookItem from './BookItem';
function BookList({ books }) {
	return (
		<ul>
			{books.map((title, index) => (
				<BookItem title={title} key={index} />
			))}
		</ul>
	);
}

export default BookList;
