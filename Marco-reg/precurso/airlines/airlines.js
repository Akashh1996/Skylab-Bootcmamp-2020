const flights = [
	{ FLT: 'LF0001', TO: 'Dublin', COST: 250, SCL: false, ETA: '10:00' },
	{ FLT: 'LF0002', TO: 'Madrid', COST: 160, SCL: false, ETA: '12:00' },
	{ FLT: 'LF0003', TO: 'New York', COST: 500, SCL: true, ETA: '16:00' },
	{ FLT: 'LF0004', TO: 'Dusseldorf', COST: 290, SCL: false, ETA: '13:00' },
	{ FLT: 'LF0005', TO: 'Malta', COST: 220, SCL: false, ETA: '15:00' },
	{ FLT: 'LF0006', TO: 'Istanbul', COST: 400, SCL: true, ETA: '15:30' },
	{ FLT: 'LF0007', TO: 'Berlin', COST: 250, SCL: false, ETA: '17:00' },
	{ FLT: 'LF0008', TO: 'Copenhaguen', COST: 290, SCL: false, ETA: '17:30' },
	{ FLT: 'LF0009', TO: 'Malaga', COST: 250, SCL: false, ETA: '18:00' },
	{ FLT: 'LF0010', TO: 'Paris', COST: 250, SCL: false, ETA: '19:00' }
];

function showWelcomeMessage(nmbr) {
	return (
		'Bienvenido al aeropuerto del Prat ' +
		nmbr +
		' estos son los vuelos disponibles:'
	);
}

console.log(showWelcomeMessage('Pepito'));

function showMeFlightInfo(vuelos) {
	for (let i = 0; i < flights.length; i++) {
		console.log(
			'El vuelo ' +
				flights[i].FLT +
				' con destino ' +
				flights[i].TO +
				' saldra en breves,con un precio de ' +
				flights[i].COST
		);
	}
}
showMeFlightInfo(flights);

function AverageCostFligth(flt) {
	let result = 0;

	for (let i = 0; i < flights.length; i++) {
		result += flights[i].COST;
	}
	return result / flights.length;
}
console.log('El precio medio de los vuelos son:' + AverageCostFligth(flights));

function ShowMeScale(flig) {
	console.log('Vuelos con escala:');

	for (let i = 0; i < flights.length; i++) {
		if (flights[i].SCL) {
			console.log(
				'El vuelo ' +
					flights[i].FLT +
					' con destino ' +
					flights[i].TO +
					' saldra en breves,con un precio de ' +
					flights[i].COST
			);
		}
	}
}
ShowMeScale(flights);

function ShowFiveLast(flight) {
	console.log('Estos serán los 5 últimos vuelos:');

	for (let i = flights.length - 1; i >= flights.length - 5; i--) {
		console.log(
			'El vuelo ' +
				flights[i].FLT +
				' con destino ' +
				flights[i].TO +
				' pertenece a los últimos vuelos del día ' +
				flights[i].COST
		);
	}
}
ShowFiveLast(flights);
