import dispatcher from '../dispatcher';

const hero = {
    id: 12,
    name: 'Narco',
    lastname: 'Traficanta'
};

export function loadHero() {
    dispatcher.dispatch({
        type: 'LOAD_HERO',
        data: hero
    })
}

export function deleteHero(){
    dispatcher.dispatch({
        type: 'DELETE_HERO'
    })
}