import dispatcher from './dispatcher'

const hero1 = {
    id: 'Ida y Vuelta',
    name: '1 Pasajero',
    lastname: 'Economy',
    salida: 'Barcelona',
    llegada: 'Madrid',
    fechas: '7/10/2020',
};
const hero2 = {
    id: 'Ida',
    name: '2 Pasajeros',
    lastname: 'Bussiness',
    salida: 'London',
    llegada: 'Paris',
    fechas: '20/5/2022',
};
export function loadHero(){
    dispatcher.dispatch({
        type: 'LOAD_HERO',
        data: hero2
    })
}
export function loadHero2(){
    dispatcher.dispatch({
        type: 'LOAD_HERO',
        data: hero1
    })
}

export function deleteHero(){
    dispatcher.dispatch({
        type: 'DELETE_HERO',
    })
}