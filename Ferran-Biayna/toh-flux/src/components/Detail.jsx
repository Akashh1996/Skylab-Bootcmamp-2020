import React, { useState, useEffect} from 'react';
import { loadHeroesById } from '../actions/action-creators';
import heroStore from '../stores/store';

function DetailHero(props) {

	const [heroid] = useState(+props.match.params.heroid)
	const [hero, setHeroes] = useState(null);
	
	function handleChange() {

		setHeroes(heroStore.getHero())
    }

	useEffect(() => {
		heroStore.addEventListener(handleChange);

		if (!hero || !heroid) {
			loadHeroesById(heroid);
		}

		return () => 
			heroStore.removeEventListener(handleChange);
		
	}, [hero, heroid]);

    return (
		<div className="hero-info">
			<img alt="error" id="hero"/>
			<div className="info">
				<h2 className="detail-heroes-title">Hero - Detail</h2>
				<div className="id">
					<span className="id-label">Id: </span>
					<span className="name-text">{hero?.id}</span>
				</div>
				<div className="name">
					<span className="id-label">Name: </span>
					<span className="name-text">{hero?.name}</span>
				</div>
			</div>
		</div>
	);
}

export default DetailHero;