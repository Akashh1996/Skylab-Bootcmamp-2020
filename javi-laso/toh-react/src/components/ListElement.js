import React from 'react';
import './ListElement.css';

function ListElement({ hero }) {
	return (
		<li key={hero}>
			<a href="#" className="hero-list-element">
				<span className="a-id">{hero}</span>
				<span>{hero}</span>
			</a>
		</li>
	);
}

export default ListElement;
