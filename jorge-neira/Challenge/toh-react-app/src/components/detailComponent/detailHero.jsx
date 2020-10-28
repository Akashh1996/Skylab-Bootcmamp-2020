import React from 'react';
import NavigationHero from '../navigationComponent/navigationHero';
import './detailHero.css';
import HeroStore from '../../store/heroStore';

const heroById = HeroStore.getHeroById(11);

class DetailHero extends React.Component {
	render() {
		return (
			<>
				<section className="detail-container">
					<NavigationHero />
					<h2 className="heroTitle">{heroById.name} details!</h2>
					<span className="heroInfo">id: {heroById.id}</span>
					<span className="heroInfo heroInfo-input-wrapper">
						Name
						<input className="heroInput" type="text" value={heroById.name}></input>
					</span>
					<button className="backButton">Back</button>
				</section>
			</>
		);
	}
}

export default DetailHero;
