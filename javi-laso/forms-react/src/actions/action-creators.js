import dispatcher from '../dispatcher';
import actionTypes from './action-types';

const optionsFlights = ['Ida y vuelta', 'Solo ida', 'Destinos múltiples'];
const passengers = [
	'1 pasajero',
	'2 pasajeros',
	'3 pasajeros',
	'4 pasajeros',
	'5 pasajeros',
	'6 pasajeros',
	'7 pasajeros',
	'8 pasajeros',
	'9 pasajeros',
	'10 pasajeros'
];
const classType = ['ECONOMY', 'PREMIUM ECONOMY', 'BUSINESS', 'LA PREMIÈRE'];

export function loadOptionsFlights() {
	dispatcher.dispatch({
		type: actionTypes.LOAD_OPTIONFLIGHTS,
		payload: optionsFlights
	});
}

export function loadPassengers() {
	dispatcher.dispatch({
		type: actionTypes.LOAD_PASSENGERS,
		payload: passengers
	});
}

export function loadClassType() {
	dispatcher.dispatch({
		type: actionTypes.LOAD_CLASSTYPE,
		payload: classType
	});
}

export function loadMadridBarcelona() {
	dispatcher.dispatch({
		type: actionTypes.LOAD_MADRIDBARCELONA
	});
}

export function eraseForm() {
	dispatcher.dispatch({
		type: actionTypes.ERASE_FORM
	});
}
