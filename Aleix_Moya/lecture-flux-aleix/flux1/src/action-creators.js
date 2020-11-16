import dispatcher from './dispatcher'

const hero = {
    id: 'Ida y Vuelta',
    name: '1 Pasajero',
    lastname: 'Economy',
    salida: 'salida',
    llegada: 'llegada',
    fechas: 'fechas',
};

export function loadHero(){
    dispatcher.dispatch({
        type: 'LOAD_HERO',
        data: hero
    })
}

export function deleteHero(){
    dispatcher.dispatch({
        type: 'DELETE_HERO',
    })
}