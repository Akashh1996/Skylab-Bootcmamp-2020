import React, { useEffect, useState } from 'react';
import heroStore from '../stores/hero-store';
import { loadHeroes } from '../actions/hero-actions';

function HeroList(props) {
	const [heroes, setHeroes] = useState(heroStore.getHeroes());

	useEffect(() => {
		heroStore.addEventListener(handleChange);
		if (!heroes || heroes.length) {
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
		<ul>
			{heroes.map((hero) => (
				<li>{hero.name}</li>
			))}
		</ul>
	);
}

export default HeroList;
