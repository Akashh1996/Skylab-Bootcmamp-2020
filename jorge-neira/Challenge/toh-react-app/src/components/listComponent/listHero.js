import React from 'react';
import NavigationHero from '../navigationComponent/navigationHero';
import HeroStore from '../../store/heroStore';
import './listHero.css';

class ListHero extends React.Component {
	render() {
		return (
			<section className="list-container">
				<NavigationHero />
			</section>
		);
	}
}

export default ListHero;
