import React from 'react';
import BookItem from './BookItem.js';


function Quiz({ books }) {
	return (
		<ul>
			{books.map((answer) => (
				<BookItem answer={answer} key={answer} />
			))}
		</ul>
	);
}

export default Quiz;
