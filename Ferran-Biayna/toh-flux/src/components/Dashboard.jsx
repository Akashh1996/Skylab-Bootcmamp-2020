import React, { useState, useEffect} from 'react';
import { loadHeroes } from '../actions/action-creators';
import heroStore from '../stores/store';

function TopHeroes() {
    const [heroes, setHeroes] = useState(heroStore.getTopHeroes());
	
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
		setHeroes(heroStore.getTopHeroes())
	}

	return (
		<main>
			<h2 className="top-heroes-title">List of Heroes</h2>
			<ul id="top-heroes-list">
				{heroes.map((hero) => <li>{hero.name}</li>)}
			</ul>
		</main>
	);
}

export default TopHeroes;