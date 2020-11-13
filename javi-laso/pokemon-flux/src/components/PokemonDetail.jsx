import React, { useState, useEffect } from 'react';
import pokemonStore from '../stores/pokemon-store';
import { loadPokemon } from '../action-creators/pokemon-actions';

function PokemonDetail({ match }) {
	const pokemonName = match.params.pokemonName;
	const [pokemonObject, setPokemonObject] = useState(pokemonStore.getPokemon());

	useEffect(() => {
		pokemonStore.addEventListener(handleChange);

		if (!pokemonObject || pokemonObject.name !== pokemonName) {
			loadPokemon(pokemonName);
		}

		return () => {
			pokemonStore.removeEventListener(handleChange);
		};
	}, [pokemonObject, pokemonName]);

	function handleChange() {
		setPokemonObject(pokemonStore.getPokemon());
	}

	return (
		<>
			{!pokemonObject && <h1>No</h1>}
			{pokemonObject && (
				<>
					<h1 id="title">{`${pokemonObject.name}`}</h1>
					<section className="d-flex">
						<h3>{`Id: ${pokemonObject.id}`}</h3>
						<img
							src={pokemonObject.sprites.other.dream_world.front_default}
							alt={pokemonObject.name}
						/>
					</section>
				</>
			)}
		</>
	);
}

export default PokemonDetail;
