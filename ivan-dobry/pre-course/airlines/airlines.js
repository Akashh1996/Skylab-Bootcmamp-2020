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

var name;
var totalPrice = 0;
var totalScales = 0;
var lastFlights = [];

name = prompt('Introduzca su nomre: ');

console.log('Bienvenido ' + name);

for (var i = 0; i < flights.length; i++) {
	let scale;
	if (flights[i].scale == true) {
		scale = ' y realizara escala';
		totalScales = totalScales + 1;
	} else {
		scale = ' y no realizara ninguna escala';
	}
	console.log(
		'El vuelo con origen: ' +
			flights[i].from +
			', y destino: ' +
			flights[i].to +
			' tiene un coste de: ' +
			flights[i].cost +
			scale
	);

	totalPrice = totalPrice + flights[i].cost;
}

console.log(
	'El coste medio de los vuelos es: ' + (totalPrice / flights.length).toFixed(2)
);

console.log('Hay un total de ' + totalScales + ' vuelos que realizan escala.');

for (var j = flights.length - 1; j >= flights.length - 5; j--) {
	lastFlights.push(flights[j].to);
}

console.log('Destinos de los ultimos vuelos del día son: ' + lastFlights);
