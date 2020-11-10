import React from 'react';
import './ListElement.css';
import { deleteHero } from '../actions/hero-actions';
import { Link } from 'react-router-dom';

function ListElement({ id, name }) {
	return (
		<li className="d-flex">
			<Link to={`/heroes/${id}`} className="hero-list-element">
				<span className="a-id">{id}</span>
				<span>{name}</span>
				<div className="flex-s"></div>
			</Link>
			<button
				className="erase-button"
				onClick={() => {
					deleteHero(id);
				}}
			>
				X
			</button>
		</li>
	);
}

export default ListElement;
