import dispatcher from '../dispatcher/dispatcher';
import actionTypes from './action-types';

async function loadHeroes(){
    const response = await fetch('heroes.json');
    const heroes = await response.json();
    
    dispatcher.dispatch({
        type: actionTypes.LOAD_HERO,
        payload: heroes
    });
}

async function deleteHero(heroId) {
    dispatcher.dispatch({
        type: actionTypes.DELETE_HERO,
        payload: heroId
    });
}



export {loadHeroes, deleteHero}