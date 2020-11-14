import React, { useEffect, useState } from 'react';
import pokeStore from '../../stores/store';
import { loadPokemons } from '../../actions/actions';
import './pokeList.css';
import { Router, Link } from 'react-router-dom';

function PokeList() {
	const [list, setList] = useState(pokeStore.getPokemons());

	function handleChange() {
		setList(pokeStore.getPokemons());
	}

	useEffect(() => {
		pokeStore.addEventListener(handleChange);
		if (!list) {
			loadPokemons();
		}
		return () => {
			pokeStore.removeEventListener(handleChange);
		};
	}, [list]);

	return (
		<>
			{list &&
				list.map((pokemon) => (
					<ul>
						<li>
							<Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
						</li>
					</ul>
				))}
		</>
	);
}

export default PokeList;
