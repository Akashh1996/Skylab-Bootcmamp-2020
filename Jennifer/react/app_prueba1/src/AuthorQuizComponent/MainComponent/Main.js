import React from 'react';
import BookItem from './BookItem/BookItem';
import './Main.css';
import BookList from './BookItem/BookList';

function Main() {
	const books = [
		'the shining',
		'The adventures of Huckleberry Finn',
		'Macbeth',
		'IT'
	];

	return (
		<section className="main">
			<img
				alt="author img"
				src="https://study.com/cimages/multimages/16/mark_twain_1871.jpg"
			></img>
			<ul></ul>
			<BookList books={books} />
		</section>
	);
}

export default Main;
