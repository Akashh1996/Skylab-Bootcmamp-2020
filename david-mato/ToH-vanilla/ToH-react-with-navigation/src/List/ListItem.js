import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

function ListItem({ heroID, heroName }) {
	return (
		<Link class="list-heroes__buttons" to={`/heroes/${heroID}`}>
			<span class="list-heroes__buttons--id">{heroID}</span>
			<span class="list-heroes__buttons--name">{heroName}</span>
		</Link>
	);
}

export default ListItem;
