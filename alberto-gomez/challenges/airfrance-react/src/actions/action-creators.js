import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const flightOptions = {
	trip: ['Ida y vuelta', 'Sólo ida', 'Multiples destinos'],
	passenger: ['Bebé', 'Niño', 'Joven', 'Adulto', 'Senior'],
	flightClass: ['ECONOMY', 'PREMIUM ECONOMY', 'BUSINESS', 'LA PREMIÈRE']
};

export function loadFlightOptions() {
	debugger;
	dispatcher.dispatch({
		type: actionTypes.LOAD_FLIGHTS,
		payload: flightOptions
	});
}
