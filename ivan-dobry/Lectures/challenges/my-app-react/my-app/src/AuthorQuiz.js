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
			<div id="main-content" className="main-content">
				<img
					src="https://www.biografiasyvidas.com/biografia/t/fotos/twain_mark.jpg"
					alt="author"
				/>
				<BookList books={books} />
			</div>
		</>
	);
}

export default AuthorQuiz;
