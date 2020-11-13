import axios from 'axios';


export function addHero(hero) {
    return {
        type: 'ADD_HERO',
        hero,
    }
}

export function deleteHero(hero) {
    return {
        type: 'DELETE_HERO',
        hero,
    }
}

export async function loadHero(dispatch) {
    const { data } = await axios('/api/heroes.json')
    dispatch({ type: 'LOAD_HERO', data, })
}