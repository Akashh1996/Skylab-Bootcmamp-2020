import React, { useState, useEffect } from 'react';
import ListElement from './ListElement';
import pokemonStore from '../stores/pokemon-store';
import { loadPokemons } from '../action-creators/pokemon-actions';

function PokemonList() {
	const [pokemonList, setPokemonList] = useState(pokemonStore.getPokemonList());

	useEffect(() => {
		pokemonStore.addEventListener(handleChange);
		if (!pokemonList) {
			loadPokemons();
		}

		return () => {
			pokemonStore.removeEventListener(handleChange);
		};
	}, [pokemonList]);

	function handleChange() {
		const list = pokemonStore.getPokemonList();
		setPokemonList(list);
	}

	return (
		<>
			<h1>Pokemon list</h1>
			{pokemonList && (
				<ul className="pokemon-list">
					{pokemonList.map((pokemon) => {
						return <ListElement pokemon={pokemon} />;
					})}
				</ul>
			)}
		</>
	);
}

export default PokemonList;
