import React from 'react';
import BookList from './BookList';

function AuthorQuiz() {
	const books = [
		'The Shining',
		'The Adventures of Huckelberry Finn',
		'Macbeth',
		'IT'
	];
	return (
		<main className="main-content d-flex">
			<img
				id="author-image"
				src="https://cdn.pixabay.com/photo/2016/01/17/14/23/albert-einstein-1144965_960_720.jpg"
				alt="author"
			></img>
			<BookList books={books} />
		</main>
	);
}

export default AuthorQuiz;
