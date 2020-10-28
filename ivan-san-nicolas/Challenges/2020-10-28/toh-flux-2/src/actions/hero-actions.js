import dispatcher from '../dispatcher/dispatcher'
import actionTypes from './action-types';

export async function loadHeroes() {
    debugger;
    const response = await fetch('heroes.json');
    const heroes = await response.json();

    dispatcher.dispatch({
        type: actionTypes.LOAD_HERO,
        payload: heroes
    })
}
