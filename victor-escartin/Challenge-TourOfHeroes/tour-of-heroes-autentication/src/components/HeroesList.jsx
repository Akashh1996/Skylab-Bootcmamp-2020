import React, { useEffect, useState } from 'react';
import { loadHeroes, deleteHero, createHero } from '../actions/hero-actions';
import heroStore from '../stores/hero-store';
import { Link } from 'react-router-dom';

function HeroList() {
	const [heroes, setHeroes] = useState(heroStore.getHeroes());
	const [newHero, setNewHero] = useState('');

	function handleChange() {
		setHeroes(heroStore.getHeroes());
	}

	useEffect(() => {
		heroStore.addEventListener(handleChange);
		if (!heroes || !heroes.length) {
			loadHeroes();
		}

		return () => {
			heroStore.removeEventListener(handleChange);
		};
	}, [heroes]);

	return (
		<>
			<input
				onChange={(event) => setNewHero(event.target.value)}
				value={newHero}
				placeholder="Enter a new hero name"
			/>
			<button type="button" onClick={() => createHero(newHero)}>
				Add
			</button>
			{(!heroes || !heroes.length) && <h1>There are no heroes!</h1>}
			{heroes &&
				heroes.length > 0 &&
				heroes.map((hero) => (
					<li key={`/heroes/${hero.id}`}>
						<Link to={hero.id}>{hero.name}</Link>
						<button type="button" onClick={() => deleteHero(hero.id)}>
							x
						</button>
					</li>
				))}
		</>
	);
}

export default HeroList;
