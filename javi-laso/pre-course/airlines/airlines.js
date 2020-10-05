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

function airline () {
    // var name = prompt('Hola, ¿como te llamas?');
    // console.log('Bienvenido, ' + name.);
    var scaleFlights = 0;

    console.log('Los vuelos disponibles hoy son:');

    for (var i = 0; i < flights.length; i++) {
        if (flights[i].scale) {
            console.log('El vuelo con origen: ' + flights[i].from + ' y destino: ' + flights[i].to + ' tiene un coste de ' + flights[i].cost + '€ y realiza una escala');
            scaleFlights++;
        } else {
            console.log('El vuelo con origen: ' + flights[i].from + ' y destino: ' + flights[i].to + ' tiene un coste de ' + flights[i].cost + '€ y no realiza ninguna escala');
        }        
    }
    console.log();
    console.log('El coste medio de los vuelos de hoy es: ' + costAverage() + '€.');
    console.log();
    console.log('De los ' + flights.length + ' vuelos de hoy, ' + scaleFlights + ' realizan escala.');
    console.log();
    console.log('El destino de los últimos 5 vuelos del día son: ' + flights[flights.length - 5].to + ', ' + flights[flights.length - 4].to + ', ' + flights[flights.length - 3].to + 
    ', ' + flights[flights.length - 2].to + ' y ' + flights[flights.length - 1].to + ', respectivamente.');
}

function costAverage() {
    var sum = 0;
    for (var i = 0; i < flights.length; i++) {
        sum += flights[i].cost;
    }

    return (sum / flights.length).toFixed(2);
}

airline();