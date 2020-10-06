/*
PROYECTO TEMA 2. Skylab Airlines! ✈️🛩

Programa una interfaz de usuario para una aerolínea (por consola ...). Esta aerolínea dispone de 10 vuelos para el día de hoy, para comenzar, estos vuelos deben estar declarados de manera global, cuando se llame a la función:
● Se preguntará por el nombre de usuario y darán la bienvenida.
● El usuario visualiza todos los vuelos disponibles de una forma amigable: El vuelo con origen: Barcelona, ​​y destino: Madrid tiene un costo de XXXX € y no realiza ninguna escala.
● A continuación, el usuario verá el costo medio de los vuelos.
● También podemos ver muchos vuelos efectúan escalas.
● Sabiendo que los últimos 5 vuelos (los últimos 5 ID) son los últimos del día, muestra al usuario sus destinos.
*/

var costeMedio = 0;
var contEscalas = 0;
var ultimosDestinos = [];

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

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },]
    

function mostrarVuelos(flights){
  for(var i = 0; i<flights.length; i++){
        let frase = "El vuelo con 'ID' " + flights[i].id + " origen " +flights[i].from.toLocaleUpperCase() + " y destino " + flights[i].to.toLocaleUpperCase() +
        " tiene un coste de " + flights[i].cost + "€."
        if(flights[i].scale){
            console.log(frase + " Este vuelo tiene escalas.")
            contEscalas++;
        }else{
            console.log(frase + " Este vuelo no tiene ninguna escala.");
        }
        costeMedio += flights[i].cost;
    }
}
    
    
function datosVuelos (){
    console.log("El coste medio de los vuelos es de " +(costeMedio/flights.length).toFixed(0) +"€.");
    console.log(contEscalas + " de estos vuelos tienen escalas.");
    costeMedio = 0;
    contEscalas = 0;

    /*
    Bucle que itera sobre los últimos 5 vuelos del día, independientemente de
    la cantidad de vuelos que hayan programados solo mostrará los 5 últimos*/
    
    for(var j = flights.length-5; j<flights.length; j++){
        ultimosDestinos.push(flights[j].to);
    }
    
    console.log("ESTOS SON LOS DESTINOS DE LOS ÚLTIMOS VUELOS DEL DÍA:\n" +
    ultimosDestinos);
    ultimosDestinos = [];
}

var usuario = prompt("Introduce tu nombre de usuario").trim();
var mensajeBienvenida = "Bienvenido " + usuario +"!";
var mensajeDespedida = "Hasta pronto " + usuario + "!";

console.log(mensajeBienvenida);
mostrarVuelos(flights);
datosVuelos();


