import React, { useState } from 'react';
import heroStore from '../store/store';
import { useParams } from 'react-router-dom';
import '../style.css';

function Detail() {
	const [heroes, setHeroes] = useState(heroStore.getHeroes());
	let { heroId } = useParams();
	return (
		<>
			<div class="hero-characteristic">
				<span>Id: </span>
				<span id="hero-id__value">{heroId}</span>
			</div>
			<div class="hero-characteristic">
				<label>
					<span>Name: </span>
					<input
						id="hero-name__input"
						placeholder="name"
						value={heroes.find((hero) => hero.id === +heroId)?.name}
					/>
				</label>
			</div>
		</>
	);
}

export default Detail;
