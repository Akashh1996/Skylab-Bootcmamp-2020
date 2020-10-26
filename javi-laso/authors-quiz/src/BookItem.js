import React from 'react';
import './BookItem.css';

function BookItem({ title, answer, funct }) {
	return (
		<button
			className="answers-button"
			onClick={() => {
				funct(answer);
			}}
		>
			<li className="answer">{title}</li>
		</button>
	);
}

export default BookItem;
