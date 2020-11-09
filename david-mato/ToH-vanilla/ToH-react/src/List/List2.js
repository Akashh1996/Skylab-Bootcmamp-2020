import React, { useEffect, useState } from 'react';
import { loadHeroes, deleteHero, createHero } from '../actions/action-creators';
import heroStores from '../stores/heroes-store';
import ListItem from './ListItem';
import '../style.css';

function List2() {
	const [heroes, setHeroes] = useState(heroStores.getHeroes());
	const [newHero, setNewHero] = useState('');

	useEffect(() => {
		heroStores.addEventListener(handleChange);
		if (!heroes || !heroes.length) {
			loadHeroes();
		}

		return () => {
			heroStores.removeEventListener(handleChange);
		};
	}, [heroes]);

	function handleChange() {
		setHeroes(heroStores.getHeroes());
	}
	return (
		<main>
			<h2 class="list-title">My Heroes</h2>
			<input
				onChange={(event) => setNewHero(event.target.value)}
				value={newHero}
				placeholder="Enter a new hero name"
			/>
			<button onClick={() => createHero(newHero)}>Add</button>
			{(!heroes || !heroes.length) && <h1>There are no heroes!</h1>}
			<div class="list-heroes">
				{heroes &&
					heroes.length > 0 &&
					heroes.map((hero) => (
						<>
							<ListItem heroID={hero.id} heroName={hero.name} />
							<button
								className="deleteButton"
								onClick={() => {
									deleteHero(hero.id);
								}}
							>
								X
							</button>
						</>
					))}
			</div>
		</main>
	);
}

export default List2;
