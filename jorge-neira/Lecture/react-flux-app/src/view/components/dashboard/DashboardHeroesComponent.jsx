import React, { useEffect, useState } from 'react';
import { loadHeroes } from '../../../actions/action-creators';
import heroStore from '../../../stores/hero-store';

function Dashboard() {
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
		setHeroes(heroStore.getTopHeroes());
	}

	return (
		<>
			<h2>Top Heroes</h2>
			<section>
				<ul>
					{heroes.map((heroMap, index) => (
						<li key={index}>{heroMap.name}</li>
					))}
				</ul>
			</section>
		</>
	);
}

export default Dashboard;
