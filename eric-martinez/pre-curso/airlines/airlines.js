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

function presentacion(){
    nombre = prompt("Introduzca su nombre: ");

    console.log("Bienvenido, " + nombre);
    for (flight of flights) {

        if(flight.scale === true){
           console.log("El vuelo con origen: " + flight.from + ", y destino: " + flight.to + 
           " tiene un coste de " + flight.cost + " â‚¬ y realiza escala.");
       }else{
           console.log("El vuelo con origen: " + flight.from + ", y destino: " 
           + flight.to + " tiene un coste de " + flight.cost +  "â‚¬ y no realiza ninguna escala.");
       }
    }
    costeMedio();
}

function costeMedio(){
    var costTotal = 0;
    for(var i = 0; i < flights.length; i++){
        costTotal += flights[i].cost;
    }
    costMig = (costTotal/flights.length).toFixed(3);
    console.log("El coste medio de los vuelos es de " + costMig + "â‚¬.")
    lastFive();
}

function lastFive(){
    var lastFlights = [];
    console.log("Estos son los Ãºltimos 5 vuelos del dÃ­a:");
    for(var i = flights.length - 1; i >= flights.length - 6; i--){
        lastFlights.push(flights[i].to);
    }
    for(var j = 0; j < lastFlights.length; j++){
        console.log(lastFlights[j]);
    }   
}

presentacion();