import dispatcher from '../dispatcher';

const optionsFlights = ['Ida y vuelta', 'Solo ida', 'Destinos múltiples'];
const passengers = [
	'1 pasajero',
	'2 pasajeros',
	'3 pasajeros',
	'4 pasajeros',
	'5 pasajeros',
	'6 pasajeros',
	'7 pasajeros'
];
const classType = ['ECONOMY', 'PREMIUM ECONOMY', 'BUSINESS', 'LA PREMIÈRE'];

export function loadOptionsFlights() {
	dispatcher.dispatch({
		type: 'LOAD_OPTIONFLIGHTS',
		data: optionsFlights
	});
}

export function loadPassengers() {
	dispatcher.dispatch({
		type: 'LOAD_PASSENGERS',
		data: passengers
	});
}

export function loadClassType() {
	dispatcher.dispatch({
		type: 'LOAD_CLASSTYPE',
		data: classType
	});
}
