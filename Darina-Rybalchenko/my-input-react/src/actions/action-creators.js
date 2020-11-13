import dispatcher from '../dispatcher'
import actionTypes from './actionTypes'

const flightOptions = {
    trip: ['Round trip', 'One-way', 'Multi-city'],
    passanger: ['Adult', 'Child', 'Infant', 'Youth', 'Senior'],
    cabin: ['ECONOMY', 'BUSINESS', 'PREMIUM ECONOMY', 'LA PRIMIÈR']
}


export function loadFlightOptions() {
    dispatcher.dispatch({
        type: actionTypes.LOAD_OPTIONS,
        data: flightOptions
    })
}



