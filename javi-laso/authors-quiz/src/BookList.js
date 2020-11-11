import React from 'react';
import BookItem from './BookItem';
import './BookList.css';

function BookList({ books, correctAnswer }) {
	return (
		<ul className="answers">
			{books.map((bookTitle) => (
				<BookItem
					title={bookTitle.name}
					answer={bookTitle.correct_answer}
					funct={correctAnswer}
					key={bookTitle.name}
				/>
			))}
		</ul>
	);
}

export default BookList;
