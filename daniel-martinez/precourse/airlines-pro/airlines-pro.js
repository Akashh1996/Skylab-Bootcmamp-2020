var vuelos = [
	[0, 'Barcelona', 'Madrid', 59.99, 0],
	[1, 'Barcelona', 'Palma', 40.0, 0],
	[2, 'Barcelona', 'Londres', 85.5, 1],
	[3, 'Barcelona', 'Moscu', 120.3, 2],
	[4, 'Barcelona', 'Paris', 49.99, 0],
	[5, 'Barcelona', 'Atenas', 180.0, 1],
	[6, 'Barcelona', 'Amsterdam', 99.99, 0],
	[7, 'Barcelona', 'Estambul', 210.0, 1],
	[8, 'Barcelona', 'Dubai', 350.0, 2],
	[9, 'Barcelona', 'Málaga', 34.99, 0]
];

//Funcion principal:

function airlinespro() {
	var usuario = prompt('Introduzca su nombre de usuario:');
	if (usuario == '') {
		alert('Debes introducir un nombre de usuario');
		return airlinespro();
	} else if (usuario == null) {
		return console.log('¡Hasta pronto!');
	}
	var costemedio = 0;
	var escalas = 0;
	var ultimos5 = [];
	console.log('¡Bienvenido ' + usuario + '!');
	console.log('Estos son los vuelos disponibles:');
	for (var i = 0; i < vuelos.length; i++) {
		costemedio += vuelos[i][3];
		if (vuelos[i][4] != 0) {
			escalas += 1;
		}
		if (i >= 5) {
			ultimos5.push(vuelos[i][2]);
		}
		consoleVuelos(i);
	}
	costemedio /= 10;
	console.log(
		'El coste medio de los vuelos es de ' + costemedio.toFixed(2) + '€'
	);
	console.log('Hay ' + escalas + ' vuelos que realizan escala.');
	console.log(
		'Los últimos vuelos del dia tienen destino a: ' + ultimos5.join(', ')
	);
	return adminOrUser();
}

function adminOrUser() {
	var adminUser = prompt('¿Eres ADMIN/USER?');
	if (adminUser.toUpperCase() === 'ADMIN') {
		return admin();
	} else if (adminUser.toUpperCase() === 'USER') {
		return user();
	} else if (adminUser == null) {
		return console.log('¡Hasta pronto!');
	} else {
		alert('Solo es posible acceder como ADMIN o USER');
		return adminOrUser();
	}
}

/*

FUNCIONES PARA ADMIN:

*/

function admin() {
	switch (
		prompt(
			'¿Qué función desea realizar? (Introduzca el número)\n1. Añadir vuelos\n2. Eliminar vuelos\n3. Salir'
		)
	) {
		case '1':
			if (vuelos.length == 15) {
				alert('El número de vuelos almacenados es el máximo (15 vuelos)');
				return admin();
			} else {
				añadirVuelo();
				break;
			}
		case '2':
			eliminarVuelo();
			break;
		case '3':
			console.log('¡Hasta pronto!');
			break;
		default:
			alert('Introduzca una opción valida.');
			admin();
	}
}

//Funciones para añadir un vuelo:

function añadirVuelo() {
	var origen = añadirOrigen();
	var destino = añadirDestino();
	var precio = añadirPrecio();
	var escalas = añadirEscalas();
	var id = vuelos[vuelos.length - 1][0] + 1;
	var nuevoVuelo = [id, origen, destino, precio, escalas];
	vuelos.push(nuevoVuelo);
	alert('Se ha añadido el vuelo correctamente.');
	console.log('Lista de vuelos actualizada:');
	for (var i = 0; i < vuelos.length; i++) {
		consoleVuelos(i);
	}
	if (window.confirm('¿Desea realizar alguna otra función?')) {
		admin();
	} else {
		console.log('¡Hasta pronto!');
	}
}

function añadirOrigen() {
	var origen = prompt('Introduzca el origen:');
	if (isNaN(Number(origen)) && origen != null) {
		return origen;
	} else {
		alert('Debes introducir un origen válido.');
		return añadirOrigen();
	}
}

function añadirDestino() {
	var destino = prompt('Introduzca el destino:');
	if (isNaN(Number(destino)) && destino != null) {
		return destino;
	} else {
		alert('Debes introducir un destino válido.');
		return añadirDestino();
	}
}

function añadirPrecio() {
	var precio = Number(prompt('Introduzca el precio:'));
	if (isNaN(precio) || precio == null || precio == 0) {
		alert('Debes introducir un precio válido.');
		return añadirPrecio();
	} else {
		return precio;
	}
}

function añadirEscalas() {
	var escalas = Number(prompt('Introduzca el número de escalas:'));
	if (Number.isInteger(escalas) && escalas != '') {
		return escalas;
	} else {
		alert('Debes introducir un entero.');
		return añadirEscalas();
	}
}

//Funciones para eliminar un vuelo:

function eliminarVuelo() {
	var idDelete = Number(
		prompt('Introduzca el ID del vuelo que desea eliminar:')
	);
	if (isNaN(Number(idDelete))) {
		alert('Debe introducir un número de ID válido');
		eliminarVuelo();
	} else {
		for (var j = 0; j < vuelos.length; j++) {
			if (idDelete === vuelos[j][0]) {
				vuelos.splice(j, 1);
			}
		}
		alert(
			'Ha eliminado el vuelo con ID ' +
				idDelete +
				' correctamente.\nA continuación se muestra la lista de vuelos actualizada.'
		);
		console.log('Lista de vuelos actualizada:');
		for (var i = 0; i < vuelos.length; i++) {
			consoleVuelos(i);
		}
	}
	if (window.confirm('¿Desea realizar alguna otra función?')) {
		admin();
	} else {
		console.log('¡Hasta pronto!');
	}
}

/*

FUNCIONES PARA USER:

*/

function user() {
	switch (
		prompt(
			'¿Qué opción desea? (Introduzca el número)\n1. Buscar por precio\n2. Comprar billete\n3. Salir'
		)
	) {
		case '1':
			buscarPorPrecio();
			break;
		case '2':
			comprarBillete();
			break;
		case '3':
			console.log('¡Hasta pronto!');
			break;
	}
}

function buscarPorPrecio() {
	var busca = [];
	switch (
		prompt(
			'Elige una opción:\n1. Precio más alto que\n2. Precio más bajo que\n3. Precio igual a\n4. Salir'
		)
	) {
		case '1':
			precio = Number(prompt('Precio:'));
			for (i = 0; i < vuelos.length; i++) {
				if (vuelos[i][3] > precio) {
					busca.push(vuelos[i]);
				}
			}
			if (busca.length == 0) {
				console.log(
					'No hay vuelos con precio más alto que ' + precio.toFixed(2) + '€'
				);
			} else {
				for (j = 0; j < busca.length; j++) {
					consoleVuelos(j);
				}
			}
			if (window.confirm('¿Desea comprar algún billete?')) {
				comprarBillete();
			} else {
				console.log('¡Hasta pronto!');
			}
			break;
		case '2':
			precio = Number(prompt('Precio:'));
			for (i = 0; i < vuelos.length; i++) {
				if (vuelos[i][3] < precio) {
					busca.push(vuelos[i]);
				}
			}
			if (busca.length == 0) {
				console.log(
					'No hay vuelos con precio más bajo que ' + precio.toFixed(2) + '€'
				);
			} else {
				for (j = 0; j < busca.length; j++) {
					consoleVuelos(j);
				}
			}
			if (window.confirm('¿Desea comprar algún billete?')) {
				comprarBillete();
			} else {
				console.log('¡Hasta pronto!');
			}
			break;
		case '3':
			var precio = Number(prompt('Precio:'));
			for (var i = 0; i < vuelos.length; i++) {
				if (vuelos[i][3] == precio) {
					busca.push(vuelos[i]);
				}
			}
			if (busca.length == 0) {
				console.log(
					'No hay vuelos con precio igual a ' + precio.toFixed(2) + '€'
				);
			} else {
				for (var j = 0; j < busca.length; j++) {
					consoleVuelos(j);
				}
			}
			if (window.confirm('¿Desea comprar algún billete?')) {
				comprarBillete();
			} else {
				console.log('¡Hasta pronto!');
			}
			break;
		case '4':
			console.log('¿Hasta pronto!');
			break;
		default:
			alert('Introduzca una opción válida.');
			buscarPorPrecio();
	}
}

function comprarBillete() {
	var id = prompt('¿Qué vuelo desea comprar? (Introduzca el número de ID)');
	if (isNaN(Number(id))) {
		alert('Debe introducir un número de ID');
		comprarBillete();
	} else {
		for (var i = 0; i < vuelos.length; i++) {
			if (id == vuelos[i][0]) {
				console.log(
					'Compra realizada con importe de ' +
						vuelos[i][3] +
						'€. Vuelo ID' +
						id +
						' ' +
						vuelos[i][1] +
						' - ' +
						vuelos[i][2] +
						'. Gracias por su compra, vuelva pronto.'
				);
				alert(
					'Ha comprado el vuelo con destino a ' +
						vuelos[i][2] +
						'. Gracias por su compra, vuelva pronto.'
				);
			}
		}
	}
}

function consoleVuelos(i) {
	console.log(
		'ID' +
			vuelos[i][0] +
			': Origen: ' +
			vuelos[i][1] +
			'    Destino: ' +
			vuelos[i][2] +
			'  -  ' +
			vuelos[i][3].toFixed(2) +
			'€, ' +
			vuelos[i][4] +
			' escalas'
	);
}

airlinespro();
