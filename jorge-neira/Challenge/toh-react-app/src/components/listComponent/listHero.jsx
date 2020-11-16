import React from 'react';
import NavigationHero from '../navigationComponent/navigationHero';
import HeroStore from '../../store/heroStore';
import ListOfHeroes from './createListHero';
import './listHero.css';

const heroList = HeroStore.getHeroes();

class ListHero extends React.Component {
	render() {
		return (
			<section className="list-container">
				<NavigationHero />
				<h2>My Heroes</h2>
				<ul>
					{heroList.map((heroes) => (
						<ListOfHeroes heroName={heroes.name} heroId={heroes.id} />
					))}
				</ul>
			</section>
		);
	}
}

export default ListHero;
