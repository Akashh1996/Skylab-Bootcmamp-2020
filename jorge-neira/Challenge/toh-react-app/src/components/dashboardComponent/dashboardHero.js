import React from 'react';
import NavigationHero from '../navigationComponent/navigationHero';
import HeroStore from '../../store/heroStore';
import './dashboardHero.css';
import HeroList from './dashboardHeroList';

const topHeros = HeroStore.getTopHeroes();

class DashboardHero extends React.Component {
	render() {
		return (
			<>
				<section className="dashbaord-container">
					<NavigationHero />
					<nav className="topheros">
						<h2 className="topheros-title">Top Heroes</h2>
						<ul>
							{topHeros.map((hero) => (
								<HeroList hero={hero.name} key={hero.id} />
							))}
						</ul>
					</nav>
				</section>
			</>
		);
	}
}

export default DashboardHero;
