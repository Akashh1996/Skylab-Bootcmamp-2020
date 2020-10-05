'use strict'

function vuelos(flights) {
    for (var i=0;i<flights.length;i++) {
        if (flights[i].scale) {
            console.log(`El vuelo con origen: ${flights[i].from}, y destino: ${flights[i].to}, tiene un coste de ${flights[i].cost}€ y realiza escala`);
        } else {
            console.log(`El vuelo con origen: ${flights[i].from}, y destino: ${flights[i].to}, tiene un coste de ${flights[i].cost}€ y no realiza ninguna escala`);
        }
    }
    return "";
}

function coste(flights) {
    var cs=0;
    for (var i=0;i<flights.length;i++) {
        cs+=flights[i].cost;
    }
    console.log(`El coste medio de los vuelos de hoy es de ${cs/(i-=1)}€`);
    return "";
}

function ultimos(flights) {
    var ar=[];
    for (var i=0;i<flights.length;i++) {
        ar.push(flights[i].to);
    }
    console.log(`Los destinos de los últimos vuelos del día son a ${ar.slice(-5,-4)}, ${ar.slice(-4,-3)}, ${ar.slice(-3,-2)}, ${ar.slice(-2,-1)} y ${ar.slice(-1)}`);
    return "";
}

var flights = [
    {id:00, to:'Bilbao', from:'Barcelona', cost:1600, scale:false},
    {id:01, to:'New York', from:'Barcelona', cost:700, scale:false},
    {id:02, to:'Los Angeles', from:'Madrid', cost:1100, scale:true},
    {id:03, to:'Paris', from:'Barcelona', cost:210, scale:false},
    {id:04, to:'Roma', from:'Barcelona', cost:150, scale:false},
    {id:05, to:'London', from:'Madrid', cost:200, scale:false},
    {id:06, to:'Madrid', from:'Barcelona', cost:90, scale:false},
    {id:07, to:'Tokyo', from:'Madrid', cost:1500, scale:true},
    {id:08, to:'Shangai', from:'Barcelona', cost:800, scale:true},
    {id:09, to:'Sydney', from:'Barcelona', cost:150, scale:true},
    {id:10, to:'Tel-Aviv', from:'Madrid', cost:150, scale:false} ];

console.log("\n -- SKYLAB AIRLINES -- ");
console.log("\nBienvenido a Skylab Airlines.")
var i=true;
while (i==true) {
    var nombre=prompt("\n¿Como te llamas?","");
    if (nombre=="" || nombre==null || isNaN(nombre)==false) {
        console.log("\nEl valor introducido no es correcto, vuelve a intentarlo.")
    } else {
        console.log(`\nUn placer saludarte, ${nombre}.\n`);
        console.log(vuelos(flights));
        console.log(coste(flights));
        console.log(ultimos(flights));
        i=false;
    }
}