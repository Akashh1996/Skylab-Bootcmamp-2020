import React, { useEffect, useState } from 'react';
import { loadHeroes, deleteHero, createHero } from '../actions/hero-actions';
import heroStore, { HeroStore } from '../stores/hero-store';
import { Link } from 'react-router-dom';

function HeroList(props) {
	const [heroes, setHeroes] = useState('');
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
		setHeroes(HeroStore.getHeroes());
	}

	return (
		<>
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
						<Link to={`/heroes/${hero.id}`}>{hero.name}</Link> <button onClick={() => deleteHero(hero.id)}>x</button>
					</li>
			))}
		</>
	);
}

export default HeroList;
