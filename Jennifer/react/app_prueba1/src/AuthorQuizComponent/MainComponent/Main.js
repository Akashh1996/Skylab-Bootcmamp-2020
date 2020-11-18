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
		<section id="main">
			<img
				alt="author img"
				src="https://study.com/cimages/multimages/16/mark_twain_1871.jpg"
			></img>
			<ul></ul>
			<BookList books={books} />
			<div id="button">
				<input type="button" id="button_continue" value="continue"></input>
			</div>
		</section>
	);
}

export default Main;
