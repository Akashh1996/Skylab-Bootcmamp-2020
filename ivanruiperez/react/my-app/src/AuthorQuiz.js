import React from 'react';
import './AuthorQuiz.css';
import BookList from './BookList';
import Header from './Header';

function AuthorQuiz() {
	const books = [
		'The shining',
		'The adventures of Hurckleberry Finn',
		'Macbeth',
		'IT'
	];
	return (
		<>
			<Header />
			<div className="main">
				<img
					alt="author"
					src="https://study.com/cimages/multimages/16/mark_twain_1871.jpg"
					height="200"
				/>
				<BookList books={books} />
			</div>
		</>
	);
}

export default AuthorQuiz;
