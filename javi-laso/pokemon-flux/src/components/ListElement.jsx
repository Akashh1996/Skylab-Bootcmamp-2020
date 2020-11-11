import React from 'react';
import { Link } from 'react-router-dom';

function ListElement({ pokemon }) {
	return (
		<li key={pokemon.name} className="pokemon-list-element">
			<Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
		</li>
	);
}

export default ListElement;
