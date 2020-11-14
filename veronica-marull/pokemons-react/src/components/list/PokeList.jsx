import React, { useEffect, useState } from 'react';
import pokeStore from '../../stores/store';
import { loadPokemons } from '../../actions/actions';
import './pokeList.css';

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
		//llamar a getpokemondetail con el name..
		<>
			{list &&
				list.map((pokemon) => (
					<ul>
						<li>{pokemon.name}</li>
					</ul>
				))}
		</>
	);
}

export default PokeList;
