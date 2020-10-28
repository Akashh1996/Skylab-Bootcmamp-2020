import React from 'react';
import BookItem from './Book-Item';

function BookList({ books }) {
	return (
		<ul>
			{books.map((title) => (
				<BookItem title={title} key={title} />
			))}
		</ul>
	);
}

export default BookList;
