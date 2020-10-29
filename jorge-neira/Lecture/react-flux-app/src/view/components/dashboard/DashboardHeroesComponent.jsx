import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadHeroes } from '../../../actions/action-creators';
import heroStore from '../../../stores/hero-store';

function Dashboard() {
	const [heroes] = useState(heroStore.getHeroes());
	const [topHeroes, setTopHeroes] = useState(heroStore.getTopHeroes());

	useEffect(() => {
		heroStore.addEventListener(handleChange);
		if (!heroes || !heroes.length) {
			loadHeroes();
		}
		return () => {
			heroStore.removeEventListener(handleChange);
		};
	}, [heroes, topHeroes]);

	function handleChange() {
		setTopHeroes(heroStore.getTopHeroes());
	}

	return (
		<>
			<h2>Top Heroes</h2>
			<section>
				<ul>
					{topHeroes.map((topHeroMap, index) => (
						<li key={index}>
							<Link to={`/hero/detail/${topHeroMap.id}`}>
								{topHeroMap.name}
							</Link>
						</li>
					))}
				</ul>
			</section>
		</>
	);
}

export default Dashboard;
