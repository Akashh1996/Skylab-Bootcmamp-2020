import React, { useEffect, useState } from 'react';
import { loadHeroById, loadHeroes } from '../../actions/hero-actions';
import storeHeroes from '../../stores/hero-store';
import '../../TohStyles.css';

function DetailHeroes({ match }) {
	const [heroId] = useState(+match.params.heroId);
	const [heroes, setHeroes] = useState(storeHeroes.getHeroes());
	const [hero, setHero] = useState(null);

	useEffect(() => {
		storeHeroes.addEventListener(onChange);

		if (heroes.length < 1) {
			loadHeroes();
		} else if (heroId && !hero) {
			loadHeroById(heroId);
		}

		return () => storeHeroes.removeEventListener(onChange);
	}, [heroId, hero, heroes]);

	function onChange() {
		setHero(storeHeroes.getHero());
		setHeroes(storeHeroes.getHeroes());
	}

	return (
		<>
			{/* {!hero && <h1>{`There is no hero with id ${heroId}`}</h1>} */}
			{hero && <h1>{`${hero.name}`}</h1>}
			<div className="hero-details">
				<span>Id:</span>
				<span id="hero-id">{heroId}</span>
			</div>
			<div className="hero-details">
				<label>
					<span>Name:</span>
					<input id="hero-name" placeholder="Hero name" value={hero}>
						{heroId.name}
					</input>
				</label>
			</div>
		</>
	);
}

export default DetailHeroes;
