import dispatcher from '../dispatcher';

const flightOptions = ['Round-trip', 'One-way', 'Multi-city'];

export function loadTrips() {
	debugger;
	dispatcher.dispatch({
		type: 'LOAD_TRIPS',
		data: flightOptions
	});
}
