import dispatcher from '../dispatcher/dispatcher';
import typeActions from './type-actions';

export async function loadHeroes() {
    const response = await fetch('../api/heroes.json');
    const heroes = await response.json();

    dispatcher.dispatch({
        type: typeActions.LOAD_HEROES,
        data: heroes
    })
};