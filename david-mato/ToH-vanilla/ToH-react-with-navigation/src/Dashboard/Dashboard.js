import React, { useState } from 'react';
import Heroes from '../store/store';
import DashboardTopHero from './DashboardTopHero';
import '../style.css';

function Dashboard() {
	const [heroes, setHeroes] = useState(Heroes.getHeroes());
	return (
		<>
			<article class="top-heroes-wrapper">
				<h2 class="top-heroes-title">Top Heroes</h2>
				<div id="top-heroes__list">
					{heroes.slice(1, 5).map((hero) => (
						<DashboardTopHero heroName={hero.name} heroId={hero.id} />
					))}
				</div>
			</article>
		</>
	);
}

export default Dashboard;
