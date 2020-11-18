// Se preguntará por el nombre de usuario y dará la bienvenida.
// El usuario visualizará todos los vuelos disponibles de una forma amigable : El vuelo con origen:
// Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
// A continuación, el usuario verá el coste medio de los vuelos.
// También podrá ver cuántos vuelos efectúan escalas.
// Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.

function welcome() {
	let usuario = prompt(
		'Bienvenido a SkyLab Airlines! Cual es tu nombre de usuario?'
	);
	if (usuario == false) {
		console.log('Debes introducir tu nombre de usuario!');
		welcome();
	} else if (usuario === null) {
		return;
	} else if (!isNaN(usuario)) {
		console.log('El nombre de usuario no puede ser solo números.');
		welcome();
	} else {
		console.log(`Bienvenido ${usuario}, estos són los vuelos disponibles:`);
		flights();
	}
}
function flights() {
	var departures = [
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

	let infoScale;
	let accFlightsScale = 0;
	let accCost = 0;
	let lastFlights = [];

	for (let i = 0; i < departures.length; i++) {
		if (departures[i].scale) {
			infoScale = 'realiza escala';
			accFlightsScale++;
		} else {
			infoScale = 'no realiza escala';
		}
		accCost += parseFloat(departures[i].cost);
		console.log(
			`· Vuelo con origen: ${departures[i].from} y destino: ${departures[i].to}, con un coste de ${departures[i].cost}€ y ${infoScale}.`
		);
	}
	accCost = (accCost / departures.length).toFixed(2);
	console.log(
		`El coste medio de los vuelos es ${accCost}€ y ${accFlightsScale} vuelos hacen escala.`
	);

	for (let j = departures.length - 5; j < departures.length; j++) {
		lastFlights.push(departures[j].to);
	}
	console.log(
		`Los destinos de los últimos vuelos del dia són: ${lastFlights}.`
	);
}

welcome();
