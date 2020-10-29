import React, { useEffect, useState } from 'react';
import { loadHeroes } from '../../../actions/action-creators';
import heroStore from '../../../stores/hero-store';

export default function HeroList() {
	const [heroes, setHeroes] = useState(heroStore.getHeroes());
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
		<section className="list-heroes-container">
			{(!heroes || !heroes.length) && <h2>There are no heroes available!</h2>}
			{heroes &&
				heroes.length > 0 &&
				heroes.map((hero, index) => <li key={index}>{hero.name}</li>)}
		</section>
	);
}
