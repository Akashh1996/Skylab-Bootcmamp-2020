import React from 'react';
import ListItem from '././ListItem.js';

function List({ _heroes }) {
	return (
		<main>
			<h2 class="top-heroes-title">Top Heroes</h2>
			<ul id="top-heroes-list">
				{_heroes.slice(0,4).map((hero) => <ListItem heroName={hero.name}/>)}
			</ul>
		</main>
	);
}

export default List;
