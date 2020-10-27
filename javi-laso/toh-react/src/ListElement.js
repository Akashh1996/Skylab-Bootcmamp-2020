import React from 'react';
import './ListElement.css';

function ListElement({ id, name }) {
	return (
		<li>
			<a href="#" className="hero-list-element">
				<span className="a-id">{id}</span>
				<span>{name}</span>
			</a>
		</li>
	);
}

export default ListElement;
