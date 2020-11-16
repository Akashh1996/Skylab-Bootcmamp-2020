import actionTypes from './action-types';
import dispatcher from '../dispatcher/dispatcher';

export async function loadHeroes() {
    const response = await fetch('heroes.json');
    const heroes = await response.json();

    dispatcher.dispatch({
        type: actionTypes.LOAD_HEROES,
        payload: heroes
    });
}