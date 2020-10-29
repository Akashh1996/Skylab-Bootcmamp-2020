import React from 'react';
import './ListElement.css';
import { Link } from 'react-router-dom';

function ListElement({ id, name }) {
	return (
		<li>
			<Link to={`/heroes/${id}`} className="hero-list-element">
				<span className="a-id">{id}</span>
				<span>{name}</span>
			</Link>
		</li>
	);
}

export default ListElement;
