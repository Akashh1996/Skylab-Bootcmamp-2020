import React, { useEffect, useState } from 'react';
import { loadHeroes, deleteHero, createHero } from '../actions/hero-actions';
import heroStore from '../stores/hero-store';

function HeroList(props) {
	const [heroes, setHeroes] = useState(heroStore.getHeroes());
	const [newHero, setNewHero] = useState('');

	useEffect(() => {
		heroStore.addEventListener(handleChange);
		if (!heroes || !heroes.length) {
			loadHeroes();
		}

		return () => {
			heroStore.removeEventListener(handleChange);
		};
	}, [heroes]);

	function handleChange() {
		setHeroes(heroStore.getHeroes());
	}

	return (
		<>
			<h1>Heroes List</h1>
			<input
				onChange={(event) => setNewHero(event.target.value)}
				value={newHero}
				placeholder="Enter a new hero name"
			/>
			<button onClick={() => createHero(newHero)}>Add</button>
			{(!heroes || !heroes.length) && <h1>There are no heroes!</h1>}
			{heroes &&
				heroes.length > 0 &&
				heroes.map((hero) => (
					<li key={hero.id}>
						{hero.name} <button onClick={() => deleteHero(hero.id)}>x</button>
					</li>
				))}
		</>
	);
}

export default HeroList;
