import dispatcher from './../dispatcher/dispatcher'
import actionTypes from './action-types'

export async function loadHeroes() {
    const response = await fetch('api/heroes.json')
    const heroes = await response.json()
    dispatcher.dispatch({
        type: actionTypes.LOAD_HEROES,
        payload: heroes
    })
}

export async function loadHeroById(heroId) {
    const response = await fetch('/api/heroes.json')
    const heroes = await response.json()
    const heroFound = heroes.find((hero) => hero.id === heroId)
    dispatcher.dispatch({
        type: actionTypes.LOAD_HERO,
        payload: heroFound
    })
}

export function deleteHero(heroId) {
    dispatcher.dispatch({
        type: actionTypes.DELETE_HERO,
        payload: heroId
    });
}

export function createHero(name) {
    if (!name.trim()) {
        return;
    }

    dispatcher.dispatch({
        type: actionTypes.ADD_HERO,
        payload: {
            id: Date.now(),
            name
        }
    });
}
