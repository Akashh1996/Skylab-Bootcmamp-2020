import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadHeroes } from '../actions/hero-actions';
import heroStore from './../stores/hero-store';

const AMOUNT = 4;
function Dashboard() {
	const [heroes, setHeroes] = useState([]);

	function handleChange() {
		setHeroes(heroStore.sliceHeroes(AMOUNT));
	}

	useEffect(() => {
		heroStore.addEventListener(handleChange);

		if (!heroes || !heroes.length) {
			loadHeroes();
		}

		return () => {
			heroStore.removeEventListener(handleChange);
		};
	});

	return (
		<>
			<ul>
				{heroes.map((hero) => (
					<li key={hero.id}>
						<Link to={`/heroes/${hero.id}`}>{hero.name}</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default Dashboard;
