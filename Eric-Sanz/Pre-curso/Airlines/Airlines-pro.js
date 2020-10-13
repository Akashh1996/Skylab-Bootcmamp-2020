let usuario;

function welcome() {
	usuario = prompt(
		'Bienvenido a SkyLab Airlines! Cual es tu nombre de usuario?'
	);
	if (usuario == false) {
		alert('Debes introducir tu nombre de usuario!');
		welcome();
	} else if (usuario == null) {
		return;
	} else if (!isNaN(usuario)) {
		alert('El nombre de usuario no puede ser solo números.');
		welcome();
	} else {
		console.log(`Bienvenido ${usuario}, estos són los vuelos disponibles:`);
		flights();
	}
}

let departures = [
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

function flights() {
	let infoScale;
	let accFlightsScale = 0;
	let accCost = 0;
	let lastFlights = [];

	for (let i = 0; i < departures.length; i++) {
		if (departures[i].scale) {
			infoScale = 'escala';
			accFlightsScale++;
		} else {
			infoScale = 'directo';
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
	typeUser();
}

function typeUser() {
	let typeUsuario = prompt('Eres ADMIN o USER?');
	if (typeUsuario == null) {
		return;
	} else if (typeUsuario === 'admin' || typeUsuario === 'ADMIN') {
		admin();
	} else if (typeUsuario === 'user' || typeUsuario === 'USER') {
		user();
	} else {
		alert('Debes introducir admin o user.');
		typeUser();
	}
}

let newFligth = { id: 0, to: '', from: '', cost: 0, scale: true };

function addFligth() {
	let infoScale;
	if (departures.length < 15) {
		newFligth.id = departures.length;
		let questionDestination = prompt('Destino del Vuelo:');
		if (questionDestination === null) {
			return;
		} else if (isNaN(questionDestination)) {
			newFligth.to = questionDestination;
		} else {
			alert('Debe introducir un destino válido.');
			addFligth();
		}
		let questionOrigin = prompt('Procedencia del vuelo:');
		if (questionOrigin === null) {
			return;
		} else if (isNaN(questionOrigin)) {
			newFligth.from = questionOrigin;
		} else {
			alert('Debe introducir una procedencia válida. Empecemos de nuevo.');
			addFligth();
		}
		let questionCost = prompt('Precio:');
		if (questionCost === null) {
			return;
		} else if (questionCost == false || isNaN(questionCost)) {
			alert('Debe introducir un precio. Empecemos de nuevo.');
			addFligth();
		} else {
			newFligth.cost = parseFloat(questionCost);
		}
		let questionScale = prompt('Hace escala? Yes/No');
		if (questionScale === null) {
			return;
		} else if (questionScale === 'yes') {
			newFligth.scale = true;
		} else if (questionScale === 'no') {
			newFligth.scale = false;
		} else {
			alert('Debe introducir yes o no. Empecemos de nuevo.');
			addFligth();
		}
		departures.push(newFligth);
		newFligth = { id: 0, to: '', from: '', cost: 0, scale: true };
		let questionAddMore = confirm('Quieres añadir otro vuelo?');
		if (questionAddMore) {
			addFligth();
		} else {
			console.log(
				'---------------------------------------------------------------------------------------------'
			);
			console.log('Estos són los vuelos que hay en el sistema:');
			for (let i = 0; i < departures.length; i++) {
				if (departures[i].scale) {
					infoScale = 'escala';
				} else {
					infoScale = 'directo';
				}
				console.log(
					`· ID de vuelo ${departures[i].id}, con origen: ${departures[i].from} y destino: ${departures[i].to}, con un coste de ${departures[i].cost}€ y ${infoScale}.`
				);
			}
			typeUser();
		}
	} else {
		alert(
			'Has llegado al máximo de vuelos posible, no se pueden introducir más.'
		);
		admin();
	}
}

function deleteFligths() {
	let infoScale;
	console.log(
		'---------------------------------------------------------------------------------------------'
	);
	console.log('Estos són los vuelos que hay en el sistema:');
	for (let i = 0; i < departures.length; i++) {
		if (departures[i].scale) {
			infoScale = 'escala';
		} else {
			infoScale = 'directo';
		}
		console.log(
			`· ID de vuelo ${departures[i].id}, con origen: ${departures[i].from} y destino: ${departures[i].to}, con un coste de ${departures[i].cost}€ y ${infoScale}.`
		);
	}
	let fligthId = prompt('Que vuelo desea eliminar? (mediante ID)');
	if (fligthId == null) {
		return;
	} else if (isNaN(fligthId)) {
		alert('Has de introducir el número de ID');
		deleteFligths();
	} else if (fligthId < 0 || fligthId >= departures.length) {
		alert('El ID introducido no existe.');
		deleteFligths();
	} else {
		departures.splice(fligthId, 1);
		newOrderId();
		let questionDeleteMore = confirm('Quieres eliminar otro vuelo?');
		if (questionDeleteMore) {
			deleteFligths();
		} else {
			console.log(
				'---------------------------------------------------------------------------------------------'
			);
			console.log('Estos són los vuelos que hay en el sistema:');
			for (let i = 0; i < departures.length; i++) {
				if (departures[i].scale) {
					infoScale = 'escala';
				} else {
					infoScale = 'directo';
				}
				console.log(
					`· ID de vuelo ${departures[i].id}, con origen: ${departures[i].from} y destino: ${departures[i].to}, con un coste de ${departures[i].cost}€ y ${infoScale}.`
				);
			}
			typeUser();
		}
	}
}

function newOrderId() {
	for (let i = 0; i < departures.length; i++) {
		departures[i].id = i;
	}
}

function admin() {
	let changeFligths = prompt('Desea añadir o eliminar vuelos?');
	if (changeFligths == null) {
		return;
	} else if (changeFligths == 'añadir' || changeFligths == 'AÑADIR') {
		addFligth();
	} else if (changeFligths === 'eliminar' || changeFligths === 'ELIMINAR') {
		deleteFligths();
	} else {
		alert("Debes introducir 'añadir' o 'eliminar'.");
		admin();
	}
}

let priceSearcher = [];

function user() {
	let infoScale;
	let price = prompt(
		'Introduzca el precio con el que quiere realizar la busqueda.'
	);
	if (price == null) {
		return;
	} else if (price == false) {
		alert('Debe introducir un precio.');
		user();
	} else if (isNaN(price)) {
		console.log('Debe introducir un precio.');
		user();
	} else {
		let options = prompt('Buscar por precio mayor, menor o igual?');
		if (options === null) {
			return;
		} else if (options === 'mayor' || options === 'MAYOR') {
			for (let i = 0; i < departures.length; i++) {
				if (price < departures[i].cost) {
					priceSearcher.push(departures[i]);
				}
			}
			if (priceSearcher == 0) {
				alert('Lo sentimos, no se han encontrado vuelos.');
				user();
			} else {
				console.log(
					'---------------------------------------------------------------------------------------------'
				);
				console.log('Se han encontrado los siguientes vuelos:');
				for (let i = 0; i < priceSearcher.length; i++) {
					if (priceSearcher[i].scale) {
						infoScale = 'escala';
					} else {
						infoScale = 'directo';
					}
					console.log(
						`· ID de vuelo ${priceSearcher[i].id}, con origen: ${priceSearcher[i].from} y destino: ${priceSearcher[i].to}, con un coste de ${priceSearcher[i].cost}€ y ${infoScale}.`
					);
				}
				buyFligth();
			}
		} else if (options === 'menor' || options === 'MENOR') {
			for (let i = 0; i < departures.length; i++) {
				if (price > departures[i].cost) {
					priceSearcher.push(departures[i]);
				}
			}
			if (priceSearcher == 0) {
				alert('Lo sentimos, no se han encontrado vuelos.');
				user();
			} else {
				console.log(
					'---------------------------------------------------------------------------------------------'
				);
				console.log('Se han encontrado los siguientes vuelos:');
				for (let i = 0; i < priceSearcher.length; i++) {
					if (priceSearcher[i].scale) {
						infoScale = 'escala';
					} else {
						infoScale = 'directo';
					}
					console.log(
						`· ID de vuelo ${priceSearcher[i].id}, con origen: ${priceSearcher[i].from} y destino: ${priceSearcher[i].to}, con un coste de ${priceSearcher[i].cost}€ y ${infoScale}.`
					);
				}
				buyFligth();
			}
		} else if (options === 'igual' || options === 'IGUAL') {
			for (let i = 0; i < departures.length; i++) {
				if (price == departures[i].cost) {
					priceSearcher.push(departures[i]);
				}
			}
			if (priceSearcher == 0) {
				alert('Lo sentimos, no se han encontrado vuelos.');
				user();
			} else {
				console.log(
					'---------------------------------------------------------------------------------------------'
				);
				console.log('Se han encontrado los siguientes vuelos:');
				for (let i = 0; i < priceSearcher.length; i++) {
					if (priceSearcher[i].scale) {
						infoScale = 'escala';
					} else {
						infoScale = 'directo';
					}
					console.log(
						`· ID de vuelo ${priceSearcher[i].id}, con origen: ${priceSearcher[i].from} y destino: ${priceSearcher[i].to}, con un coste de ${priceSearcher[i].cost}€ y ${infoScale}.`
					);
				}
				buyFligth();
			}
		} else {
			alert('Debe introducir una opción.');
			user();
		}
	}
}

function buyFligth() {
	let infoScale;
	let buyId = prompt('Introduzca la ID del Vuelo que desea comprar.');
	if (buyId == null) {
		return;
	} else {
		function flightBought(num) {
			return num.id == parseFloat(buyId);
		}

		if (priceSearcher.find(flightBought) == undefined) {
			alert('Introduzca una ID válida!');
			priceSearcher = [];
			user();
		} else {
			if (priceSearcher.find(flightBought).scale) {
				infoScale = 'escala';
			} else {
				infoScale = 'directo';
			}
			console.log(
				`Gracias por comprar el Vuelo con ID: ${
					priceSearcher.find(flightBought).id
				}, con destino ${priceSearcher.find(flightBought).to}, procedente de ${
					priceSearcher.find(flightBought).from
				}, con un coste ${
					priceSearcher.find(flightBought).cost
				}€ y ${infoScale}. \nBuen viaje y hasta pronto ${usuario}`
			);
			priceSearcher = [];
		}
	}
}

welcome();

//Después de ver toda la información el programa pedirá al usuario si es ADMIN/USER, dependiendo de la elección, el programa se comportará de la siguiente manera:
//Si eres ADMIN, la función debería permitir:
//Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, si se intenta introducir uno más, saltará un alert().
//Poder eliminar vuelos mediante el ID.
//Si eres USER la función debería permitir:
//Buscar por precio (más alto, más bajo o igual), el programa debería mostrar los datos de los vuelos encontrados
//e, indicando al programa el ID, el programa responderá: "Gracias por su compra, vuelva pronto.
