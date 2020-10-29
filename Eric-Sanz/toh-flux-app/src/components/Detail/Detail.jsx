import React, { useEffect, useState } from 'react';
import { loadHeroes } from '../../actions/hero-actions';
import storeHeroes from '../../stores/hero-store';
import '../../TohStyles.css';

function DetailHeroes() {
	const [heroes, setHeroes] = useState(storeHeroes.getHeroes());

	useEffect(() => {
		storeHeroes.addEventListener(onChange);

		if (!heroes || !heroes.length) {
			loadHeroes();
		}

		return storeHeroes.removeEventListener(onChange);
	}, [heroes]);

	function onChange() {
		setHeroes(storeHeroes.getHeroes());
	}

	return (
		<>
			<div className="hero-details">
				<span>Id:</span>
				<span id="hero-id">{heroes.id}</span>
			</div>
			<div className="hero-details">
				<label>
					<span>Name:</span>
					<input
						id="hero-name"
						placeholder="Hero name"
						value={heroes.name}
					></input>
				</label>
			</div>
		</>
	);
}

export default DetailHeroes;
