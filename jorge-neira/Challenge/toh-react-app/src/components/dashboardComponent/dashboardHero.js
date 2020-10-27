import React from 'react';
import HeroStore from './store/heroStore';
import './dashboardHero.css';
import NavigationHero from '../navigationComponent/navigationHero';

// const dashboard = HeroStore.getTopHeroes();
// const heroesList = HeroStore.getHeroes();
const hero = HeroStore.getHeroById(4);

class DashboardHero extends React.Component {
	render() {
		return (
			<>
				<section className="dashbaord-container">
					<NavigationHero />
					<nav className="topheros">
						<ul>
              
            </ul>
					</nav>
				</section>
			</>
		);
	}
}

export default DashboardHero;
