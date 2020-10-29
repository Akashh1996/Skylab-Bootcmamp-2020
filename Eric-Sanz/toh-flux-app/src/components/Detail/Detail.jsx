import React from 'react';
// import heroes from '../../stores/hero-store';
import heroes from '../../api/heroesConst';
import '../../TohStyles.css';

function DetailHeroes() {
	return (
		<>
			<div className="hero-details">
				<span>Id:</span>
				<span id="hero-id">{heroes[0].id}</span>
			</div>
			<div className="hero-details">
				<label>
					<span>Name:</span>
					<input
						id="hero-name"
						placeholder="Hero name"
						value={heroes[0].name}
					></input>
				</label>
			</div>
		</>
	);
}

export default DetailHeroes;
