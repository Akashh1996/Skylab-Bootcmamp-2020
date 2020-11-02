import React, { useState, useEffect } from 'react';
import heroStore from '../stores/hero-store';
import { Link } from 'react-router-dom';
import { loadHeroes } from '../actions/hero-actions';

function Dashboard() {
	const [heroes, setHeroes] = useState(heroStore.getHeroes());

	useEffect(() => {
		heroStore.addEventListener(handleChange);
		if (!heroes || !heroes.length) {
			loadHeroes();
		}
	});

	function handleChange() {
		setHeroes(heroStore.getHeroes);
	}

	return (
		<>
			<ul>
				{heroes.map((hero) => (
					<li>
						<Link to={`heroes/${hero.id}`}>{hero.name}</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default Dashboard;
