import axios from 'axios';
import actionTypes from './actions-types'

const URL = 'http://localhost:9090/'
function loadHeroesSuccess(heroes) {
    return {
        type: actionTypes.LOAD_HEROES,
        payload: heroes,
    }
}



export const loadHeroes = () => async (dispatch) => {
    
    try{
        const loadHeroes = await axios.get(URL);
        debugger;
        dispatch(loadHeroesSuccess(loadHeroes));
    } catch(error) {
        console.log(error)
    }
}