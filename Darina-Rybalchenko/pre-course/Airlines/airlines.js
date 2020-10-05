const flights = [
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
const numberOfFlights = flights.length;

function airlines() {
    
    askName();

    console.log("Los vuelos de hoy son:")
    friendlyPrint(flights);

    printAverageCost();

    printNumberOfFlightsWithScales()

    console.log("Los ultimos 5 vuelos son:")
    const lastFlights = flights.slice(6);

    friendlyPrint(lastFlights)
};

function askName() {
    let name = prompt("Introduzca tu nombre");
if(name === null || name === "") {
    alert(`Tienes que introducir el nombre correcto`)
    askName();
} else {
    alert(`Bienvenido ${name}`)
    };
}

function friendlyPrint(flightsList) {
    for(let i = 0; i < flightsList.length; i++) {
        if(!flightsList[i].scale) {
            console.log(`El vuelo con origen ${flightsList[i].from} y destino ${flightsList[i].to} tiene un coste ${flightsList[i].cost} y no realiza ninguna escala`)
        } else {
            console.log(`El vuelo con origen ${flightsList[i].from} y destino ${flightsList[i].to} tiene un coste ${flightsList[i].cost} y realiza una escala`)
        }
    }
}

function printAverageCost() {
    let sumCost = 0;
    for(let i = 0; i < numberOfFlights; i++) {
        sumCost += flights[i].cost; 
    }
    const averageCost = (sumCost/numberOfFlights).toFixed(0)
    console.log(`El coste medio de los vuelos es ${averageCost} euros`)
}

function printNumberOfFlightsWithScales() {
    let scaleFlights = 0;
    for(let i = 0; i < numberOfFlights; i++) {
        if(flights[i].scale) scaleFlights += 1 
    }
    console.log(`Hay ${scaleFlights} vuelos con escala`)
}

airlines(); 