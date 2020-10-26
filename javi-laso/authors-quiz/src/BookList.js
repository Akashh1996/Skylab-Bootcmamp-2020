import React from 'react';
import BookItem from './BookItem';
import './BookList.css';

function BookList({ books }) {
	return (
		<ul className="answers">
			{books.map((bookTitle) => (
				<BookItem title={bookTitle} key={bookTitle} />
			))}
		</ul>
	);
}

export default BookList;
