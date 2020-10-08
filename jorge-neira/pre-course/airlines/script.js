// Usar "wellcome()" para iniciar
let flights = [
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

function wellcome() {
	const userName = prompt('Bienvenido, ¿cual es tu nombre?');
	let userNameCap = '';
	userName != '' && userName != null
		? (userNameCap =
				userName[0].toUpperCase() + userName.substring(1).toLowerCase())
		: (userNameCap = 'John Doe');
	alert(`Bienvenido ${userNameCap} a Aerolineas Skylab`);
	console.log(
		'%cEstos son los siguientes Vuelos disponibles:\n',
		'font-weight: bold; font-size: 13px'
	);
	let averageCost = 0;
	let flyWithScale = 0;

	for (let i = 0; i < flights.length; i++) {
		const arrFly = flights[i];
		if (arrFly.scale === false) {
			console.log(
				'\t- El vuelo con origen ' +
					`%c${arrFly.from}` +
					' %cy destino ' +
					`%c${arrFly.to}` +
					' %ctiene un coste de ' +
					`%c${arrFly.cost + '€'}` +
					' %cy no realiza ninguna escala.',
				'color: orange',
				'',
				'color: orange',
				'',
				'color: orange',
				''
			);
		} else {
			flyWithScale += 1;
			console.log(
				'\t- El vuelo con origen ' +
					`%c${arrFly.from}` +
					' %cy destino ' +
					`%c${arrFly.to}` +
					' %ctiene un coste de ' +
					`%c${arrFly.cost + '€'}` +
					' %cy realiza escala.',
				'color: orange',
				'',
				'color: orange',
				'',
				'color: orange',
				''
			);
		}
		averageCost += arrFly.cost;
	}
	const lastFly = flights.slice(flights.length - 5);
	console.log(
		`\n${userNameCap} este es el precio medio de los vuelos es %c${
			(averageCost / flights.length).toFixed(2) + '€'
		}. \n%cUn total de %c${flyWithScale} %cvuelos realizan escala.`,
		'color: orange',
		'',
		'color: orange',
		''
	);
	console.log('Y los ultimos vuelos tienen como destino:');
	let z = 0;
	while (z < lastFly.length) {
		console.log(`\t- ${lastFly[z].to}`);
		z++;
	}
}
