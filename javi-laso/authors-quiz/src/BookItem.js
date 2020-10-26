import React from 'react';
import './BookItem.css';

function BookItem({ title }) {
	return (
		<button className="answers-button">
			<li className="answer">{title}</li>
		</button>
	);
}

export default BookItem;
