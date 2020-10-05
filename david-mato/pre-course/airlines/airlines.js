
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
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];

function airline () {

    do {
        var userName = prompt('Introduce tu nombre:');
        if (userName === "") {
            alert('Debes añadir un nombre');
        }
    } while (userName !== null && !isNaN(userName) || userName === "")

    if (userName){
        var userNameCapitalized = userName[0].toUpperCase() + userName.slice(1);
        var finalUserName = userNameCapitalized[0] + userNameCapitalized.slice(1).toLowerCase();
        console.log(`¡Bienvenido, ${finalUserName}!`);
    } else {
        console.log('¡Bienvenido, usuario!');
    }
    
    console.log('\nLos vuelos para el día de hoy son los siguientes:\n ');

    var totalCost = 0;
    var totalScale = 0;
    var lastDestinations = "";

    for (flight of flights) {

         if (flight.scale) {
            console.log(`El vuelo con origen en ${flight.from} y destino a ${flight.to} 
tiene un coste de ${flight.cost} € y realiza escala.`);
            totalScale += 1;
        } else {
            console.log(`El vuelo con origen en ${flight.from} y destino a ${flight.to} 
tiene un coste de ${flight.cost} € y no realiza ninguna escala.`);
        }

        if (flights.indexOf(flight) >= flights.length - 5 && flights.indexOf(flight) < flights.length - 2){
            lastDestinations += flight.to + ", ";
        } else if (flights.indexOf(flight) === flights.length - 2){
            lastDestinations += flight.to;
        } else if (flights.indexOf(flight) === flights.length - 1){
            lastDestinations += " y " + flight.to + ".";
        }

        totalCost += flight.cost;

    }

    console.log(`\nEl coste medio de los vuelos es de ${Math.round(totalCost / flights.length * 100) / 100} €.`);
    console.log(`\nHay ${totalScale} vuelos con escala.`);
    console.log(`\nLos 5 últimos vuelos de hoy tienen destino a ${lastDestinations}`);


}

airline();
