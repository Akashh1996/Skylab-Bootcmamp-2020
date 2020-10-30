import actionTypes from '../actions/action-types';
import dispatcher from '../dispatcher';

export async function loadPokemons() {
    const response = await fetch('/api/pokemons.json');
    const pokemons = await response.json();

    dispatcher.dispatch({
        type: actionTypes.GET_POKEMONS,
        payload: pokemons
    });
}

export async function loadPokemonById(pokemonId) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    const pokemon = await response.json();

    dispatcher.dispatch({
        type: actionTypes.GET_ACTUAL_POKEMON,
        payload: pokemon
    });
}