import React, { useEffect, useState } from 'react';
import { loadHeroes, deleteHero, createHero } from '../Actions/hero-actions';
import heroStore from './../Store/hero-store';

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
			<input
				onChange={(event) => setNewHero(event.target.value)}
				value={newHero}
				placeholder="Enter a new hero name"
			/>
			<button onClick={() => createHero(newHero)}>Add</button>
			{(!heroes || !heroes.length) && <h1>There are no heroes!</h1>}
			<ul>
				{heroes &&
					heroes.length > 0 &&
					heroes.map((hero) => {
						return (
							<li key={hero.id}>
								{hero.name}
								<button onClick={() => deleteHero(hero.id)}>X</button>
							</li>
						);
					})}
			</ul>
		</>
	);
}

export default HeroList;
