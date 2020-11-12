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
            dispatch(requestHeroesSuccess(heroes.data));
        } catch (error) {
            dispatch(requestHeroesError(error));
        }
    };
}

export function deleteHero(id) {
    debugger;
    console.log(`id: ${id}`);
    return async (dispatch) => {
        const endpoint = 'http://localhost:9999/heroes';
        try {
            const heroes = await axios.delete(endpoint, {
                params: {
                    id,
                }
            });
            console.log(`${heroes.data}`);
            dispatch(requestHeroesSuccess(heroes.data));
        } catch (error) {
            dispatch(requestHeroesError(error))
        }
    }
}