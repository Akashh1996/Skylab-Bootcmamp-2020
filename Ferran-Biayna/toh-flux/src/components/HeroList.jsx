import React, { useState, useEffect } from 'react';
import { loadHeroes } from '../actions/action-creators';
import { Link } from 'react-router-dom'
import heroStore from '../stores/store';

function HeroList() {
	
	const [heroes, setHeroes] = useState(null);
	
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
		setHeroes(heroStore.getHeroes())
	}

	return (
		<main>
			<h2 className="list-heroes-title">List of Heroes</h2>
			<ul id="list-heroes-list">
				{heroes?.map((hero) => <li key={hero.id}><Link to={`/heroes/${hero.id}`}>{hero.name}</Link></li>)}
			</ul>
		</main>
	);
}

export default HeroList