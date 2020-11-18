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

function presentacion() {
	let nombre = prompt('Introduzca su nombre: ');

	console.log('Bienvenido, ' + nombre);
	for (let flight of flights) {
		if (flight.scale === true) {
			console.log(
				'El vuelo con origen: ' +
					flight.from +
					', y destino: ' +
					flight.to +
					' tiene un coste de ' +
					flight.cost +
					' â‚¬ y realiza escala.'
			);
		} else {
			console.log(
				'El vuelo con origen: ' +
					flight.from +
					', y destino: ' +
					flight.to +
					' tiene un coste de ' +
					flight.cost +
					'â‚¬ y no realiza ninguna escala.'
			);
		}
	}
	costeMedio();
	lastFive();
}

function costeMedio() {
	var costTotal = 0;
	for (var i = 0; i < flights.length; i++) {
		costTotal += flights[i].cost;
	}
	let costMig = (costTotal / flights.length).toFixed(3);
	console.log('El coste medio de los vuelos es de ' + costMig + 'â‚¬.');
}

function lastFive() {
	var lastFlights = [];
	console.log('Estos son los Ãºltimos 5 vuelos del dÃ­a:');
	for (var i = flights.length - 1; i >= flights.length - 6; i--) {
		lastFlights.push(flights[i].to);
	}
	for (var j = 0; j < lastFlights.length; j++) {
		console.log(lastFlights[j]);
	}
}

function mostrarVuelos() {
	for (var i = 0; i < flights.length; i++) {
		console.log(
			'El vuelo con id: ' +
				flights[i].id +
				', origen ' +
				flights[i].from +
				' y destino ' +
				flights[i].to +
				' tiene un coste de ' +
				flights[i].cost +
				'â‚¬.'
		);
	}
}

presentacion();

function logIn() {
	var inici = prompt('Introduce si eres ADMIN o USER:');
	if (inici.toUpperCase() == 'ADMIN') {
		return iniciADMIN();
	} else if (inici.toUpperCase() == 'USER') {
		return iniciUSER();
	} else {
		alert('No se ha podido iniciar sesiÃ³n, pruÃ©belo de nuevo!');
		return logIn();
	}
}

function iniciADMIN() {
	switch (
		prompt(
			'Â¿QuÃ© operaciÃ³n desea realizar?, Introduzca la letra de la opciÃ³n a realizar. a) Introducir vuelo, b) Eliminar vuelo, c) Salir'
		)
	) {
		case 'a':
			if (flights.length == 15) {
				alert('Ya ha almacenado el mÃ¡ximo de vuelos posible!');
				return iniciADMIN();
			} else {
				introduceVuelo();
				break;
			}
		case 'b':
			eliminarVuelo();
			break;
		case 'c':
			console.log('Â¡AdiÃ³s!');
		default:
			alert('Introduzca una operaciÃ³n correcta.');
			return iniciADMIN();
	}
}

function introduceVuelo() {
	if (flights.length < 15) {
		let flight = { id: '', to: '', from: '', cost: 0, scale: false };
		do {
			flight.id = window.prompt('Introduzca el nÃºmero de vuelo:');
		} while (flight.id.length == 0);
		do {
			flight.to = window.prompt('Introduzca el destino:');
		} while (flight.to.length == 0 || typeof flight.to !== 'string');
		do {
			flight.from = window.prompt('Introduce el origen del vuelo:');
		} while (flight.from.length == 0 || typeof flight.from !== 'string');
		do {
			flight.cost = parseInt(window.prompt('Introduzca el coste del vuelo:'));
		} while (flight.cost <= 0 || !flight.cost);

		flight.ESC = window.confirm('Â¿El vuelo tiene escala?');
		flights.push(flight);

		if (window.confirm('Â¿Desea introducir mÃ¡s vuelos?')) {
			mostrarVuelos();
		} else {
			console.log('Â¡AdiÃ³s!');
		}

		console.log('Esta es la lista actualizada con los vuelos aÃ±adidos:');
		mostrarVuelos();
	} else
		alert('Se ha almacenado el nÃºmero mÃ¡ximo de vuelos posible (15 vuelos).');
}

function eliminarVuelo() {
	var idEliminar = prompt(
		'Por favor introduce el ID del vuelo que desea eliminar'
	);
	var idVuelo = false;
	for (var i = 0; i < flights.length && !idVuelo; i++) {
		if (flights[i].id == idEliminar) {
			idVuelo = true;
			idEliminar = flights.splice(i, 1);
			alert(
				'Vuelo eliminado correctamente. A continuaciÃ³n se muestra la lista de vuelos actualizada:'
			);
			mostrarVuelos();
		}
	}
	if (!idVuelo) {
		alert('No se ha encontrado ningÃºn vuelo con el ID introducido.');
	}
}

function iniciUSER() {
	do {
		var order = prompt(
			"Â¿CÃ³mo desear ordenar el precio de los vuelos? Escriba '+', '-' o '='"
		);
	} while (order !== '+' && order !== '-' && order !== '=');

	switch (order) {
		case '+':
			flights.sort(function (primer, segon) {
				if (primer.cost < segon.cost) {
					return 1;
				}
				if (primer.cost > segon.cost) {
					return -1;
				}
				return 0;
			});
			console.log(
				'Estos son los vuelos con los precios ordenados de mayor a menor:'
			);
			for (let i = 0; i < flights.length; i++) {
				if (flights[i].scale === true) {
					console.log(
						`El vuelo con id: ${flights[i].id} to: ${flights[i].to} from: ${flights[i].from} y tiene un coste de ${flights[i].cost} â‚¬. Este vuelo realiza al menos una escala `
					);
				} else {
					console.log(
						`El vuelo con id: ${flights[i].id} to: ${flights[i].to} from: ${flights[i].from} y tiene un coste de ${flights[i].cost} â‚¬. Este vuelo no realiza ninguna escala. `
					);
				}
			}
			var selID = Number(prompt('Introduzca el ID del vuelo deseado:'));
			var vuelos = 0;
			for (i = 0; i < flights.length; i++) {
				if (selID === flights[i].id) {
					if (flights[i].scale === true) {
						console.log(
							`Ha seleccionado el siguiente vuelo. \n> ID: ${flights[i].id} \n> from: ${flights[i].from} \n> to: ${flights[i].to} \n> precio: ${flights[i].cost} â‚¬. \n> Este vuelo realiza al menos una escala.`
						);
					} else {
						console.log(
							`Ha seleccionado el siguiente vuelo. \n> ID: ${flights[i].id} \n> from: ${flights[i].from} \n> to: ${flights[i].to} \n> precio: ${flights[i].cost} â‚¬. \n> Este vuelo no realiza ninguna escala.`
						);
					}
					console.log('Gracias por su compra, vuelva pronto.');
				} else {
					vuelos += 1;
					if (vuelos === flights.length) {
						console.log('El ID del vuelo introducido no existe.');
					}
				}
			}
			break;

		case '-':
			flights.sort(function (primer, segon) {
				if (primer.cost > segon.cost) {
					return 1;
				}
				if (primer.cost < segon.cost) {
					return -1;
				}
				return 0;
			});
			console.log(
				'Estos son los vuelos con los precios ordenados de menor a mayor:'
			);
			for (var i = 0; i < flights.length; i++) {
				if (flights[i].scale === true) {
					console.log(
						`El vuelo con id: ${flights[i].id} to: ${flights[i].to} from: ${flights[i].from} y tiene un coste de ${flights[i].cost} â‚¬. Este vuelo realiza al menos una escala `
					);
				} else {
					console.log(
						`El vuelo con id: ${flights[i].id} to: ${flights[i].to} from: ${flights[i].from} y tiene un coste de ${flights[i].cost} â‚¬. Este vuelo no realiza ninguna escala. `
					);
				}
			}
			selID = Number(prompt('Introduzca el ID del vuelo deseado:'));
			vuelos = 0;
			for (i = 0; i < flights.length; i++) {
				if (selID === flights[i].id) {
					if (flights[i].scale === true) {
						console.log(
							`Ha seleccionado el siguiente vuelo. \n> ID: ${flights[i].id} \n> from: ${flights[i].from} \n> to: ${flights[i].to} \n> precio: ${flights[i].cost} â‚¬. \n> Este vuelo realiza al menos una escala.`
						);
					} else {
						console.log(
							`Ha seleccionado el siguiente vuelo. \n> ID: ${flights[i].id} \n> from: ${flights[i].from} \n> to: ${flights[i].to} \n> precio: ${flights[i].cost} â‚¬. \n> Este vuelo no realiza ninguna escala.`
						);
					}
					console.log('Gracias por su compra, vuelva pronto.');
				} else {
					vuelos += 1;
					if (vuelos === flights.length) {
						console.log('El ID del vuelo introducido no existe.');
					}
				}
			}
			break;

		case '=':
			var selPreu = Number(prompt('Introduzca el precio deseado:'));
			vuelos = 0;
			for (i = 0; i < flights.length; i++) {
				if (selPreu === flights[i].cost) {
					if (flights[i].scale === true) {
						console.log(
							`Ha seleccionado el siguiente vuelo. \n> ID: ${flights[i].id} \n> from: ${flights[i].from} \n> to: ${flights[i].to} \n> precio: ${flights[i].cost} â‚¬. \n> Este vuelo realiza al menos una escala.`
						);
					} else {
						console.log(
							`Ha seleccionado el siguiente vuelo. \n> ID: ${flights[i].id} \n> from: ${flights[i].from} \n> to: ${flights[i].to} \n> precio: ${flights[i].cost} â‚¬. \n> Este vuelo no realiza ninguna escala.`
						);
					}
					console.log('Gracias por su compra, Â¡AdiÃ³s!.');
				} else {
					vuelos += 1;
					if (vuelos === flights.length) {
						console.log('El ID del vuelo introducido no existe.');
					}
				}
			}
			break;
	}
}

logIn();
