import dispatcher from '../dispatcher';

const hero = {
    id: 12,
    name: 'Narco',
    lastname: 'Traficante'
}

export function loadHero() {
    dispatcher.dispatch({
        type: 'LOAD_HERO',
        data: hero
    })
}