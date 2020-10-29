import dispatcher from '../dispatcher';
import actionTypes from './action-types';

const selectTypes = [
	{
		type: 'Viaje',
		options: ['Ida y vuelta', 'Solo ida', 'Destinos múltiples']
	},
	{
		type: 'Pasajeros *',
		options: [
			'Adulto',
			'Niño (2 - 11 años)',
			'Bebé (0 - 23 meses)',
			'Joven (18 - 24 años)',
			'Senior (65 años o más)',
			'Estudiante nivel superior (18 - 29 años)'
		]
	},
	{
		type: 'Clase',
		options: ['ECONOMY', 'PREMIUM ECONOMY', 'BUSINESS', 'LA PREMIÈRE']
	}
];

const flight = {
	departure: 'Barcelona',
	arrival: 'Madrid'
};

export function loadOptions() {
	dispatcher.dispatch({
		type: actionTypes.LOAD_OPTIONS,
		data: selectTypes
	});
}

export function loadFlight() {
	dispatcher.dispatch({
		type: actionTypes.LOAD_FLIGHT,
		data: flight
	});
}

export function deleteFlight() {
	dispatcher.dispatch({
		type: actionTypes.DELETE_FLIGHT
	});
}
