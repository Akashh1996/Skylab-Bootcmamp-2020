import React, { useEffect, useState } from 'react';
import { loadHeroes } from '../../actions/hero-actions';
import storeHeroes from '../../stores/hero-store';
import '../../TohStyles.css';
import DashboardTop from './DashboardTop';

function Dashboard() {
	const [heroes, setHeroes] = useState(null);

	useEffect(() => {
		storeHeroes.addEventListener(onChange);

		if (!heroes || !heroes.length) {
			debugger;
			loadHeroes();
		}

		return () => storeHeroes.removeEventListener(onChange);
	}, [heroes]);

	function onChange() {
		setHeroes(storeHeroes.getHeroes());
	}

	return (
		<div className="top-heroes-container">
			<h2 className="top.heroes-title">Top Heroes</h2>
			<div id="top-heroes__list">
				{heroes &&
					heroes.slice(1, 5).map((hero) => {
						return <DashboardTop heroName={hero.name} heroId={hero.id} />;
					})}
			</div>
		</div>
	);
}

export default Dashboard;
