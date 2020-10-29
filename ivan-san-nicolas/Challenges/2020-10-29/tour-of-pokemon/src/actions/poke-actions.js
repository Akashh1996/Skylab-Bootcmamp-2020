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