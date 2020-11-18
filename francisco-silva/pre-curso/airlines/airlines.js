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


// Mensagem de bienvenida
var nombre = prompt("Introduzca su nombre:");
console.log("Bienvenido " + nombre);



// Visualizar vuelos disponibles

function vuelos() {
    for(var i=0; i<flights.length; i++) {
        var mensagem = "El vuelo con 'ID' " + flights[i].id + " origen " +flights[i].from + " y destino " + flights[i].to +
        " tiene un coste de " + flights[i].cost + "€.";
        console.log(mensagem);
    }
}
vuelos();



// Custo médio
var costeMedio = function() {
    for (var j=0,sum=0;j<flights.length;j++) {
      sum += flights[j].cost;
    }
    return(sum / j).toFixed(2);
}
console.log("El coste medio de los vuelos de hoy es: " + costeMedio() + "€");


//Cuales vuelos tienen escalas

for(var k=0; k<flights.length; k++) {
    if(flights[k].scale === true) {
        console.log("El vuelo con partida desde " + flights[k].from + " e destino " + flights[k].to + " tiene escala");
    } else {
        console.log("El vuelo con partida desde " + flights[k].from + " e destino " + flights[k].to + " no tiene escala");
    }
}

//Cuales son los ultimos 5 vuelos

var ultimosDestinos = [];
for(var l=6; l<flights.length; l++) {
    ultimosDestinos.push(flights[l].to);
}
console.log("Los ultimos 5 vuelos de hoy tienen como destino " + ultimosDestinos);