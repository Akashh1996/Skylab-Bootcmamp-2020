import dispatcher from '../dispatcher';

const flightOptions = ['Ida y Vuelta', 'No vuelvo', 'Múltiples destinos'];
const travelers = [1, 2, 30, '300 o más'];
const classOptions = ["Renfe", "Cabify", "Space X"];
const airports = ["Mars", "Uranus", "Pluto", "Venus", "Corona", "Barcelona", "Viseu", "Skylab", "Cocina", "Camp Nou"];

export function loadDestination() {
	dispatcher.dispatch({
		type: 'LOAD_DESTINATION',
		data: flightOptions
	});
}
export function loadTravelers() {
	dispatcher.dispatch({
		type: 'LOAD_TRAVELERS',
		data: travelers
	});
}

export function loadClass() {
	dispatcher.dispatch({
		type: 'LOAD_CLASS',
		data: classOptions
	});
}
export function loadAirports() {
	dispatcher.dispatch({
		type: 'LOAD_AIRPORTS',
		data: airports
	});


}