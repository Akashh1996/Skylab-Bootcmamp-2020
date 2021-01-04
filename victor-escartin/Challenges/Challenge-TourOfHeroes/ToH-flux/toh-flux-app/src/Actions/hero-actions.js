import actionTypes from './hero-actiontypes'
import dispatcher from '../Dispatcher/dispatcher'

export async function loadHeroes(){
    const response = await fetch ("api/heroes.json");
    const heroes = await response.json();


    dispatcher.dispatch(
        {
            type: actionTypes.LOAD_HEROES,
            payload: heroes
        })
}

export function deleteHero(heroID){
    dispatcher.dispatch({
        type:actionTypes.DELETE_HERO,
        payload:heroID
    })
}

export function createHero(name){
    if(!name.trim()){
        return;
    }

    dispatcher.dispatch({
        type: actionTypes.ADD_HERO,
        payload:{
            id: Date.now(),name
        }
    })
}