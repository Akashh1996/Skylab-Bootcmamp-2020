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
		debugger;
		return () => {
			pokemonStore.removeEventListener(handleChange);
		};
	}, [pokemonList]);

	function handleChange() {
		setPokemonList(pokemonStore.getPokemonList());
	}

	return (
		<ul>
			{pokemonList?.map((pokemon) => {
				return <ListElement data={pokemon} />;
			})}
		</ul>
	);
}

export default PokemonList;
