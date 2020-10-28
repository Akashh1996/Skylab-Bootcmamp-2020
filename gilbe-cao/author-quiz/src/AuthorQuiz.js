import React from 'react';
import BookList from './BookList';
import Header from './Header';

function AuthorQuiz() {
	const books = [
		'The shining',
		'The adventures of Huckleberry Finn',
		'Macbeth',
		'IT'
	];

	return (
		<>
			<Header />
			<div className="main-content">
				<img alt="author" />
				<BookList books={books} />
			</div>
		</>
	);
}

export default AuthorQuiz;
