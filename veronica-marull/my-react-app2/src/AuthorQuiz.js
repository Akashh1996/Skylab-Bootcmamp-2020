import React from 'react';
import Header from './Header';
import BookList from './BookList';

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
				<img
					src="https://study.com/cimages/multimages/16/mark_twain_1871.jpg"
					alt="author"
				/>
				<BookList books={books} />
			</div>
		</>
	);
}

export default AuthorQuiz;
