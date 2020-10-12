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

// Se preguntará por el nombre de usuario y dará la bienvenida.

/* *** DEFINIR UN ERROR PARA DETENER LA EJECUCIÓN DEL PROGRAMA SI EL INPUT INTRODUCIDO NO ES VÁLIDO ***

function javascript_wrongValue()
{
   throw new Error('Valor introducido no válido. Reinicie el programa para volver a intentarlo.');
}
*/

do {
	var username = prompt('Por favor, introduzca su nombre:');
} while (isFinite(username) || username === null);

console.log(
	`Bienvenido ${username}, los vuelos programados para el día de hoy son los siguientes:`
);

/* *** SE PUEDE DETENER LA EJECUCIÓN SI EL VALOR INTRODUCIDO NO ES VÁLIDO. LA VARIABLE SE DEFINE FUERA DEL BUCLE. ***
if (isFinite(username || username === null)) {
    window.confirm("El valor introducido no es válido.");
    javascript_wrongValue();
} else {
    console.log(`Bienvenido ${username}, los vuelos programados para el día de hoy son los siguientes:`);
}
*/

// El usuario visualizará todos los vuelos disponibles de una forma amigable.

for (let i = 0; i < flights.length; i++) {
	if (flights[i].scale === true) {
		console.log(
			`El vuelo número ${flights[i].id} con destino ${flights[i].to} parte desde ${flights[i].from} y tiene un coste de ${flights[i].cost} euros. Este vuelo realiza al menos una escala `
		);
	} else {
		console.log(
			`El vuelo número ${flights[i].id} con destino ${flights[i].to} parte desde ${flights[i].from} y tiene un coste de ${flights[i].cost} euros. Este vuelo no realiza ninguna escala. `
		);
	}
}

// A continuación, el usuario verá el coste medio de los vuelos.

var averagePrice = 0; // ** Entiendo que esta variable debe declararse fuera del bucle, sino en cada iteración valdría 0 al inicio de cada iteración. **

for (let i = 0; i < flights.length; i++) {
	averagePrice += flights[i].cost;
}

console.log(
	`El precio medio del billete es de ${(averagePrice / flights.length).toFixed(
		2
	)} euros.`
);

// Tambien podrá ver cuántos vuelos efectúan escalas.

var numScale = 0; // ** Al igual que en el caso anterior, debido declarar la variable fuera del bucle para no perder los valores acumulados con el operador += en cada iteración. **

for (let i = 0; i < flights.length; i++) {
	if (flights[i].scale === true) {
		numScale += 1;
	}
}
console.log(
	`De los vuelos programados para hoy, sólo ${numScale} hacen al menos una escala.`
);

// Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.

var last5Flights = ''; // ** Mismo caso que con averagePrice y numScale. **

for (let i = 6; i < flights.length; i++) {
	if (i !== flights.length - 1) {
		last5Flights += flights[i].to + ', ';
	} else {
		last5Flights += 'y ' + flights[i].to + '.';
	}
}

console.log(`Los últimos 5 vuelos del día tienen como destino ${last5Flights}`);

// PRO
do {
	var permission = prompt("Detalle usted si es 'admin' o 'user':");
} while (permission !== 'admin' && permission !== 'user');

/* *** SE PUEDE DETENER LA EJECUCIÓN SI EL VALOR INTRODUCIDO NO ES VÁLIDO. LA VARIABLE SE DEFINE FUERA DEL BUCLE. ***
if (permission !== 'admin' && permission !== 'user') {
    window.confirm("El valor introducido no es válido.");
    javascript_wrongValue();
}
*/

// ADMIN

switch (permission) {
	case 'admin': // ** Cambiado a minusculas. **
		// Poder crear más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, si se intenta introducir uno más, saltará un alert().
		do {
			var addFlights = prompt("¿Desea añadir más vuelos? Conteste 'si' o 'no'");
		} while (addFlights !== 'si' && addFlights !== 'no');

		/* *** SE PUEDE DETENER LA EJECUCIÓN SI EL VALOR INTRODUCIDO NO ES VÁLIDO. LA VARIABLE SE DEFINE FUERA DEL BUCLE. ***
        if (addFlights !== 'si' && addFlights !== 'no') {
            window.confirm("El valor introducido no es válido.");
            javascript_wrongValue();
        }
        */

		switch (addFlights) {
			case 'si':
				if (flights.length < 15) {
					do {
						var newFlight_id = Number(
							prompt('Introduce el ID del nuevo vuelo:')
						);
						var newFlight_to = prompt('Introduce el destino del nuevo vuelo:');
						var newFlight_from = prompt('Introduce la salida del nuevo vuelo:');
						var newFlight_cost = Number(
							prompt('Introduce el coste del nuevo vuelo:')
						);
						var newFlight_scale = Boolean(
							prompt(
								'Indica número de escalas que realiza el vuelo (en el caso de ser un vuelo directo, deja la casilla vacía):'
							)
						);
						var newFlight = {
							id: newFlight_id,
							to: newFlight_to,
							from: newFlight_from,
							cost: newFlight_cost,
							scale: newFlight_scale
						};
						flights.push(newFlight);
						do {
							var moreFlights = prompt('¿Quiere añadir más vuelos?');
						} while (moreFlights !== 'si' && moreFlights !== 'no');

						/* *** SE PUEDE DETENER LA EJECUCIÓN SI EL VALOR INTRODUCIDO NO ES VÁLIDO. LA VARIABLE SE DEFINE FUERA DEL BUCLE. ***
                        if (addFlights !== 'si' && addFlights !== 'no') {
                            window.confirm("El valor introducido no es válido.");
                            javascript_wrongValue();
                        }
                        */
					} while (moreFlights == 'si' && flights.length < 15);
					if (flights.length === 15) {
						alert(
							'¡Atención, ha llegado al máximo número de vuelos permitidos!'
						);
					}
				} else {
					alert('¡Atención, ha llegado al máximo número de vuelos permitidos!');
				}
				break;
			case 'no':
				break;
		}

		// Poder eliminar vuelos mediante el ID.
		do {
			var deleteFlight = prompt('¿Desea eliminar algún vuelo?');
		} while (deleteFlight !== 'si' && deleteFlight !== 'no');

		/* *** SE PUEDE DETENER LA EJECUCIÓN SI EL VALOR INTRODUCIDO NO ES VÁLIDO. LA VARIABLE SE DEFINE FUERA DEL BUCLE. ***
        if (addFlights !== 'si' && addFlights !== 'no') {
            window.confirm("El valor introducido no es válido.");
            javascript_wrongValue();
        }
        */
		switch (deleteFlight) {
			case 'si':
				var deletedFlight = Number(
					prompt('Introduzca la ID del vuelo que desea eliminar:')
				); // ** No confundir deletedFlight con deleteFlight. **
				var flightCounter = 0;
				for (let i = 0; i < flights.length; i++) {
					if (deletedFlight === flights[i].id) {
						flights.splice(i, 1);
					} else {
						flightCounter += 1;
						if (flightCounter === flights.length) {
							console.log('El ID del vuelo introducido no existe.');
						}
					}
				}

				for (let i = 0; i < flights.length; i++) {
					if (flights[i].scale === true) {
						console.log(
							`El vuelo número ${flights[i].id} con destino ${flights[i].to} parte desde ${flights[i].from} y tiene un coste de ${flights[i].cost} euros. Este vuelo realiza al menos una escala `
						);
					} else {
						console.log(
							`El vuelo número ${flights[i].id} con destino ${flights[i].to} parte desde ${flights[i].from} y tiene un coste de ${flights[i].cost} euros. Este vuelo no realiza ninguna escala. `
						);
					}
				}
				break;

			case 'no':
				for (let i = 0; i < flights.length; i++) {
					if (flights[i].scale === true) {
						console.log(
							`El vuelo número ${flights[i].id} con destino ${flights[i].to} parte desde ${flights[i].from} y tiene un coste de ${flights[i].cost} euros. Este vuelo realiza al menos una escala `
						);
					} else {
						console.log(
							`El vuelo número ${flights[i].id} con destino ${flights[i].to} parte desde ${flights[i].from} y tiene un coste de ${flights[i].cost} euros. Este vuelo no realiza ninguna escala. `
						);
					}
				}
				break;
		}
		break;
	// USER

	case 'user': // ** Cambiado a minusculas. **
		// Buscar por precio (más alto, más bajo o igual)
		do {
			var order = prompt(
				"¿Cómo desear ordenar el precio de los vuelos? Escriba 'mayor', 'menor' o 'igual'"
			);
		} while (order !== 'mayor' && order !== 'menor' && order !== 'igual');

		/* *** SE PUEDE DETENER LA EJECUCIÓN SI EL VALOR INTRODUCIDO NO ES VÁLIDO. LA VARIABLE SE DEFINE FUERA DEL BUCLE. ***
        if (addFlights !== 'mayor' && addFlights !== 'menor' && addFlights !== 'igual') {
            window.confirm("El valor introducido no es válido.");
            javascript_wrongValue();
        }
        */

		switch (order) {
			case 'mayor': // ** Cambiado a minusculas. **
				flights.sort(function (a, b) {
					if (a.cost < b.cost) {
						return 1;
					}
					if (a.cost > b.cost) {
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
							`El vuelo número ${flights[i].id} con destino ${flights[i].to} parte desde ${flights[i].from} y tiene un coste de ${flights[i].cost} euros. Este vuelo realiza al menos una escala `
						);
					} else {
						console.log(
							`El vuelo número ${flights[i].id} con destino ${flights[i].to} parte desde ${flights[i].from} y tiene un coste de ${flights[i].cost} euros. Este vuelo no realiza ninguna escala. `
						);
					}
				}
				var selectedID = Number(prompt('Introduzca el ID del vuelo deseado:')); // ** La definición de la variable debe quedar fuera del bucle, para que no lo solicite de nuevo en cada iteración. **
				var flightCounter = 0;
				for (let i = 0; i < flights.length; i++) {
					if (selectedID === flights[i].id) {
						if (flights[i].scale === true) {
							console.log(
								`Usted ha seleccionado el siguiente vuelo. \n> ID: ${flights[i].id} \n> Salida: ${flights[i].from} \n> Llegada: ${flights[i].to} \n> Precio: ${flights[i].cost} \n> Este vuelo realiza al menos una escala.`
							);
						} else {
							console.log(
								`Usted ha seleccionado el siguiente vuelo. \n> ID: ${flights[i].id} \n> Salida: ${flights[i].from} \n> Llegada: ${flights[i].to} \n> Precio: ${flights[i].cost} euros \n> Este vuelo no realiza ninguna escala.`
							);
						}
						console.log('Gracias por su compra, vuelva pronto.');
					} else {
						flightCounter += 1;
						if (flightCounter === flights.length) {
							console.log('El ID del vuelo introducido no existe.');
						}
					}
				}
				break;

			case 'menor': // ** Cambiado a minusculas. **
				flights.sort(function (a, b) {
					if (a.cost > b.cost) {
						return 1;
					}
					if (a.cost < b.cost) {
						return -1;
					}
					return 0;
				});
				console.log(
					'Estos son los vuelos con los precios ordenados de menor a mayor:'
				);
				for (let i = 0; i < flights.length; i++) {
					if (flights[i].scale === true) {
						console.log(
							`El vuelo número ${flights[i].id} con destino ${flights[i].to} parte desde ${flights[i].from} y tiene un coste de ${flights[i].cost} euros. Este vuelo realiza al menos una escala `
						);
					} else {
						console.log(
							`El vuelo número ${flights[i].id} con destino ${flights[i].to} parte desde ${flights[i].from} y tiene un coste de ${flights[i].cost} euros. Este vuelo no realiza ninguna escala. `
						);
					}
				}
				var selectedID = Number(prompt('Introduzca el ID del vuelo deseado:')); // ** La definición de la variable debe quedar fuera del bucle, para que no lo solicite de nuevo en cada iteración. **
				var flightCounter = 0;
				for (let i = 0; i < flights.length; i++) {
					if (selectedID === flights[i].id) {
						if (flights[i].scale === true) {
							console.log(
								`Usted ha seleccionado el siguiente vuelo. \n> ID: ${flights[i].id} \n> Salida: ${flights[i].from} \n> Llegada: ${flights[i].to} \n> Precio: ${flights[i].cost} \n> Este vuelo realiza al menos una escala.`
							);
						} else {
							console.log(
								`Usted ha seleccionado el siguiente vuelo. \n> ID: ${flights[i].id} \n> Salida: ${flights[i].from} \n> Llegada: ${flights[i].to} \n> Precio: ${flights[i].cost} euros \n> Este vuelo no realiza ninguna escala.`
							);
						}
						console.log('Gracias por su compra, vuelva pronto.');
					} else {
						flightCounter += 1;
						if (flightCounter === flights.length) {
							console.log('El ID del vuelo introducido no existe.');
						}
					}
				}
				break;

			case 'igual': // ** Cambiado a minusculas. **
				var selectedPrice = Number(prompt('Introduzca el precio deseado:')); // ** La definición de la variable debe quedar fuera del bucle, para que no lo solicite de nuevo en cada iteración. **
				var flightCounter = 0;
				for (let i = 0; i < flights.length; i++) {
					if (selectedPrice === flights[i].cost) {
						if (flights[i].scale === true) {
							console.log(
								`Usted ha seleccionado el siguiente vuelo. \n> ID: ${flights[i].id} \n> Salida: ${flights[i].from} \n> Llegada: ${flights[i].to} \n> Precio: ${flights[i].cost} \n> Este vuelo realiza al menos una escala.`
							);
						} else {
							console.log(
								`Usted ha seleccionado el siguiente vuelo. \n> ID: ${flights[i].id} \n> Salida: ${flights[i].from} \n> Llegada: ${flights[i].to} \n> Precio: ${flights[i].cost} euros \n> Este vuelo no realiza ninguna escala.`
							);
						}
						console.log('Gracias por su compra, vuelva pronto.');
					} else {
						flightCounter += 1;
						if (flightCounter === flights.length) {
							console.log('El ID del vuelo introducido no existe.');
						}
					}
				}
				break;
		}
		break;
}
