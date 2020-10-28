import React, { useEffect, useState } from 'react';
import { loadHeroes } from '../actions/hero-actions';
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

	useEffect(() => {
		heroStore.addEventListener(handleChange);
		if (!heroes || !heroes.length) {
			loadHeroes();
		}
	}, [heroes]);

	function handleChange() {
		setHeroes(heroStore.getHeroes());
	}

	return (
		<>
			{(!heroes || !heroes.length) && <h1>There are no heroes!</h1>}
			{heroes &&
				heroes.length > 0 &&
				heroes.map((hero) => {
					return <li>{hero.name}</li>;
				})}
		</>
	);
}

export default HeroList;
