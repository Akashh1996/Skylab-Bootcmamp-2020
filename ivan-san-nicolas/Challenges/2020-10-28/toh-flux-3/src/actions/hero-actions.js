import dispatcher from '../dispatcher/dispatcher';
import actionTypes from './action-types';

async function loadHeroes(){
    const response = await fetch('heroes.json');
    const heroes = await response.json();
    
    dispatcher.dispatch({
        type: actionTypes.LOAD_HEROES,
        payload: heroes
    })
}

export default loadHeroes;