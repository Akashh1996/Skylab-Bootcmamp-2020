import actionTypes from './actionTypes';
import axios from 'axios';

function requestHeroesSuccess(heroesList) {
    return {
        type: actionTypes.LOAD_HEROES,
        heroesList,
    }
}

function requestHeroesError(error) {
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
    return async (dispatch) => {
        const endpoint = 'http://localhost:9999/heroes';
        try {
            const heroes = await axios.delete(endpoint, {
                params: {
                    id,
                }
            });
            dispatch(requestHeroesSuccess(heroes.data));
        } catch (error) {
            dispatch(requestHeroesError(error));
        }
    }
}

export function addHero(name) {
    console.log(name);
    return async (dispatch) =>{
        const endpoint = 'http://localhost:9999/heroes';
        try {
            const heroes = await axios.post(endpoint, {
                params: {
                    name,
                }
            });
            dispatch(requestHeroesSuccess(heroes.data))
        } catch (error) {
            dispatch(requestHeroesError(error));
        }
    }
}

export function updateHero(newName, id) {
    return async (dispatch) =>{
        const endpoint = 'http://localhost:9999/heroes';
        try {
            const heroes = await axios.patch(endpoint, {
                params: {
                    newName,
                    id,
                }
            });
            dispatch(requestHeroesSuccess(heroes.data));
        } catch (error) {
            dispatch(requestHeroesError(error));
        }
    }
}