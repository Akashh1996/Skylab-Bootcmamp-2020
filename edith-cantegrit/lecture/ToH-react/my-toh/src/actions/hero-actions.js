import actionsTypes from './action-types'
import dispatcher from '../dispatcher/dispatcher'
import heroStore from '../stores/hero-store';

export async function loadHeroes() {
    const response = await fetch('api/heroes.json');
    const heroes = await response.json();

    dispatcher.dispatch({
        type: actionsTypes.LOAD_HEROES,
        payload: heroes
    });
}

export function deleteHero(heroId) {
    dispatcher.dispatch({
        type: actionsTypes.DELETE_HERO,
        playload: heroId
    });
}

export function createHero(name) {
    if(!name.trim()) {
        return;
    }
    dispatcher.dispatch({
        type: actionsTypes.ADD_HERO,
        playload: {
            id: Date.now(),
        }
    });
}