import React from 'react';
import './dashboard-component.css';
import HeroList from './dashboardHeroList-component';
import HeroStore from '../../../stores/hero-store';

const topHeroes = HeroStore.getTopHeroes();
export default function DashboardHeroes() {
	return (
		<>
			<section className="dashbaord-container">
				<nav className="topheros">
					<h2 className="topheros-title">Top Heroes</h2>
					<ul>
						{topHeroes.map((hero, index) => (
							<HeroList hero={hero} key={index} />
						))}
					</ul>
				</nav>
			</section>
		</>
	);
}
