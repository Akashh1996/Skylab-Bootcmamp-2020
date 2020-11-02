import React from 'react';
import heroes from '../stores/store';
import DashboardTopHero from './DashboardTopHero';
import '../style.css';

function Dashboard() {
	return (
		<>
			<article class="top-heroes-wrapper">
				<h2 class="top-heroes-title">Top Heroes</h2>
				<div id="top-heroes__list">
					{heroes.slice(1, 5).map((hero) => (
						<DashboardTopHero heroName={hero.name} />
					))}
				</div>
			</article>
		</>
	);
}

export default Dashboard;
