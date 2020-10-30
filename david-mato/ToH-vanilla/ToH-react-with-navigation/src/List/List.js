import React, { useState } from 'react';
import heroStore from '../store/store';
import ListItem from './ListItem';
import '../style.css';

function List() {
	const [heroes, setHeroes] = useState(heroStore.getHeroes());
	return (
		<main>
			<h2 class="list-title">My Heroes</h2>
			<div class="list-heroes">
				{heroes.map((hero) => (
					<ListItem heroID={hero.id} heroName={hero.name} />
				))}
			</div>
		</main>
	);
}

export default List;
