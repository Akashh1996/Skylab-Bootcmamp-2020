import axios from 'axios';
import actionTypes from './action-types'

export function requestLoadHeroes() {
    return async (dispatch) => {
    const endpoint = `http://localhost:1240/heroes`;
    try {
        debugger;
        const heroesList = await axios.get(endpoint);
        dispatch(requestHeroesListSuccess(heroesList.data))
    }
    catch(error) {
        dispatch(requestHeroesListError(error))
    };
}   
}

function requestHeroesListSuccess(heroList) {
    return {
        type: actionTypes.LOAD_HEROES_LIST,
        heroList
    }
}

function requestHeroesListError(errorHero) {
    return {
        type: actionTypes.HERO_ERROR,
        errorHero
    }
}