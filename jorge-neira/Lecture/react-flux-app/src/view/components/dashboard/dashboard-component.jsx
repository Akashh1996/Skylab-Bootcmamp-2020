import React, { useEffect, useState } from 'react';
import './dashboard-component.css';
import { loadHeroes } from '../../../actions/action-creators';
import HeroList from './dashboardHeroList-component';
import heroStore from '../../../stores/hero-store';

export default function DashboardHeroes() {
	const [heroes, setHeroes] = useState(heroStore.getHeroes);
	const [topHeroes, setTopHeroes] = useState(heroStore.getHeroes());

	useEffect(() => {
		heroStore.addEventListener(handleChange);
		if (!heroes && !heroes.length) {
			loadHeroes();
		}
		return () => {
			heroStore.removeEventListener(handleChange);
		};
	}, [heroes, topHeroes]);

	function handleChange() {
		setHeroes(heroStore.getHeroes());
		setTopHeroes(heroStore.getTopHeroes());
	}

	return (
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
	);
}
