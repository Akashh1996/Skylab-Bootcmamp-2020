import React, { useEffect, useState } from 'react';
import {
	loadHeroes,
	deleteHero,
	createHero,
	updateHero
} from '../actions/hero-actions';
import heroStore from '../stores/hero-store';

// const heroesData = [
// 	{ id: 11, name: 'Dr Nice' },
// 	{ id: 12, name: 'Narco' },
// 	{ id: 13, name: 'Bombasto' },
// 	{ id: 14, name: 'Celeritas' },
// 	{ id: 15, name: 'Magneta' },
// 	{ id: 16, name: 'RubberMan' },
// 	{ id: 17, name: 'Dynama' },
// 	{ id: 18, name: 'Dr IQ' },
// 	{ id: 19, name: 'Magma' },
// 	{ id: 20, name: 'Tornado' }
// ];

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
				onChange={(event) => {
					setNewHero(event.target.value);
				}}
			/>
			<button
				onClick={() => {
					createHero(newHero);
				}}
			>
				Add hero
			</button>
			{(!heroes || !heroes.length) && <h1>There are no heroes!</h1>}
			{heroes &&
				heroes.length > 0 &&
				heroes.map((hero) => (
					<li key={hero.id}>
						{hero.name}
						<div className="flex-s"></div>
						<button
							onClick={() => {
								return deleteHero(hero.id);
							}}
						>
							X
						</button>
						<button
							onClick={(event) => {
								return updateHero(event.target.value);
							}}
						>
							Update
						</button>
					</li>
				))}
		</>
	);
}

export default HeroList;
