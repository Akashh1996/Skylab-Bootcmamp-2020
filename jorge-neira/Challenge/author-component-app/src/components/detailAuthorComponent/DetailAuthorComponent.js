import React from 'react';
import './detail.css';
import BookItem from './BookItem';
import BookList from './BookList';

class DetailAuthor extends React.Component {
	render() {
		const books = [
			'The Shining',
			'The Adventure of Huckleberry Finn',
			'Macbeth',
			'IT'
		];
		return (
			<section className="detail-container">
				<img
					src="https://study.com/cimages/multimages/16/mark_twain_1871.jpg"
					alt="Logo"
				></img>
				<div className="listContainer">
					<BookList books={books} item={BookItem} key={BookItem} />
				</div>
			</section>
		);
	}
}

export default DetailAuthor;
