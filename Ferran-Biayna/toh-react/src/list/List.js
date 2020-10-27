import React from 'react';
import ListItem from '../ListItem.js';

function List({ _heroes }) {
	return (
		<main>
			<h2 class="list-heroes-title">List of Heroes</h2>
			<ul id="list-heroes-list">
				{_heroes.map((hero) => <ListItem heroName={hero.name}/>)}
			</ul>
		</main>
	);
}

export default List;
