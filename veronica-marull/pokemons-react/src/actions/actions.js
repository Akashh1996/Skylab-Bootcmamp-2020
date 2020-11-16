import dispatcher from '../dispatcher/dispatcher';
import actionTypes from './actionTypes';

export async function loadPokemons() {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon');
	const pokemonsResponse = await response.json();

	//console.log(pokemonsResponse.results);

	dispatcher.dispatch({
		type: actionTypes.LOAD_POKEMONS,
		payload: pokemonsResponse.results
	});
}

export async function loadPokemonsDetail(name) {
	try {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
		const detail = await response.json();
		//console.log(detail);

		dispatcher.dispatch({
			type: actionTypes.POKEMONS_DETAIL,
			payload: detail
		});
	} catch (error) {
		console.log('error');
	}
}
