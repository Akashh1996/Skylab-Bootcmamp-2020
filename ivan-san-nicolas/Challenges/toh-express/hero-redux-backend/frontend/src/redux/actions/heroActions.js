import actionTypes from './actionTypes';
import axios from 'axios';

function requestHeroesSuccess(heroesList) {
    debugger;
    return {
        type: actionTypes.LOAD_HEROES,
        heroesList,
    }
}

function requestHeroesError(error) {
    debugger;
    return {
        type: actionTypes.LOAD_HEROES_ERROR,
        error,
    }
}

export function requestHeroes() {
    return async (dispatch) => {
        const endpoint = 'http://localhost:9999/heroes';
        try {
            const heroes = await axios.get(endpoint);
            debugger;
            console.log(`heroes in heroActions: ${heroes}`);
            dispatch(requestHeroesSuccess(heroes.data));
        } catch (error) {
            dispatch(requestHeroesError(error));
        }
    };
}