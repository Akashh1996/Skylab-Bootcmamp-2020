import React from 'react';
import BookList from './BookList';

function AuthorQuiz() {
	const books = [
		{ name: 'The Shining', correct_answer: false },
		{ name: 'The Adventures of Huckelberry Finn', correct_answer: true },
		{ name: 'Macbeth', correct_answer: false },
		{ name: 'IT', correct_answer: false }
	];

	function correctAnswer(answer) {
		const background = document.getElementById('main-content');
		background.style.backgroundColor = answer ? 'green' : 'red';
	}

	return (
		<main id="main-content" className="d-flex">
			<img
				id="author-image"
				src="https://cdn.pixabay.com/photo/2014/07/12/07/54/mark-twain-391112_960_720.jpg"
				alt="author"
			></img>
			<BookList books={books} correctAnswer={correctAnswer} />
		</main>
	);
}

export default AuthorQuiz;
