/*Programa una interfaz de usuario para una aerolínea (por consola...). Esta aerolínea dispondrá de 10 vuelos para el día de hoy, para empezar, 
estos vuelos deben estar declarados de manera global, cuando se llame a la función:
*/

var flights = [
	{ id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
	{ id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
	{ id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
	{ id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
	{ id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
	{ id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
	{ id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
	{ id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
	{ id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
	{ id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
	{ id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

function airlines() {
	var userName = prompt('Bienvenido! Por favor, introduce tu nombre: '); //● Se preguntará por el nombre de usuario y dará la bienvenida.

	alert('¡Bienvenido a Skylab Airlines!');

	console.log('Bienvenido ' + userName + '!');

	//● El usuario visualizará todos los vuelos disponibles de una forma amigable : El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.

	var averageCost = 0;
	var countFlights = 1;
	var scaleFlight = 0;

	console.log(
		'%cA continuación te mostramos el listado de vuelos disponibles:',
		'color: blue'
	);

	for (let i = 0; i < flights.length; i++) {
		if (flights[i].scale === false) {
			console.log(
				'El vuelo con origen ' +
					flights[i].from +
					' y destino ' +
					flights[i].to +
					' tiene un coste de ' +
					flights[i].cost +
					'.00€ y no realiza escala'
			);
		} else {
			console.log(
				'El vuelo con origen ' +
					flights[i].from +
					' y destino ' +
					flights[i].to +
					' tiene un coste de ' +
					flights[i].cost +
					'.00€ y tiene programado hacer escala'
			);
			scaleFlight += 1;
		}
		averageCost += flights[i].cost;
		countFlights += 1;
	}

	//● A continuación, el usuario verá el coste medio de los vuelos.

	console.log('%cEl coste medio de los vuelos es:', 'color: blue');
	console.log((averageCost / countFlights).toFixed(2) + '€.');

	//● También podrá ver cuántos vuelos efectúan escalas.

	console.log(
		'%cEl total de vuelos de hoy que realizan escala son: ',
		'color: blue'
	);
	console.log(scaleFlight + ' vuelos.');

	console.log(
		'%cA continuación te mostramos los destinos de los últimos 5 vuelos del dia:',
		'color: blue'
	);

	//● Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.

	const lastFlights = flights.slice(flights.length - 5);

	for (let l = 0; l < lastFlights.length; l++) {
		console.log(
			'El vuelo con ID:' +
				lastFlights[l].id +
				' con salida desde ' +
				lastFlights[l].from +
				' tiene como destino ' +
				lastFlights[l].to +
				'.'
		);
	}
}
