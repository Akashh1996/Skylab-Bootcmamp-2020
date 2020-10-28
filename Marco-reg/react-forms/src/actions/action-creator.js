import dispatcher from '../dispatcher';

const flightOptions = ['Ida y Vuelta', 'Sólo ida', 'Múltiples destinos'];

export function loadDestination() {
	dispatcher.dispatch({
		type: 'LOAD_DESTINATION',
		data: flightOptions
	});
}
