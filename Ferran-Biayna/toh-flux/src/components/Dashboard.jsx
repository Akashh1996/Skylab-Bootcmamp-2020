import React, { useState, useEffect} from 'react';
import { loadHeroes } from '../actions/action-creators';
import { Link } from 'react-router-dom'
import heroStore from '../stores/store';

function TopHeroes() {
	const [heroes, setHeroes] = useState(null);

	
	function handleChange() {
		setHeroes(heroStore.getTopHeroes())
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
		<main>
			<h2 className="top-heroes-title">List of Heroes</h2>
			<ul id="top-heroes-list">
				{heroes?.map((hero) => <li key={hero?.id}><Link to={`/heroes/${hero?.id}`}>{hero?.name}</Link></li>)}
			</ul>
		</main>
	);
}

export default TopHeroes;