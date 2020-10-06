var flights = [
    { id: 0, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 1, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 2, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 3, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 4, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 5, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 6, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 7, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 8, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 9, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];

function middleCost(){
    let allCosts = 0;
    let midCost;
    for (m=0; m<flights.length; m++){
        allCosts += parseFloat(flights[m].cost);
    }
    midCost = allCosts / flights.length;
    console.log("El coste medio de los vuelos es de "+midCost.toFixed(0));
}
function showFlights(){
     console.log("Los vuelos disponibles del día son:");
     for (f=0; f<flights.length; f++){
        if (flights[f].scale === true){
            console.log("ID del vuelo "+flights[f].id+", con destino a "+flights[f].to+", con origen "+flights[f].from+" ,tiene un coste de "+flights[f].cost+" y tiene escala.");
        } else{
            console.log("ID del vuelo "+flights[f].id+", con destino a "+flights[f].to+", con origen "+flights[f].from+" ,tiene un coste de "+flights[f].cost+" y no tiene escala");
        }
    }
}
function lastFlights(){
    let last = [];
    for (l = flights.length-5; l<flights.length; l++){
        last.push(flights[l].to);
    }
    console.log("Los últimos vuelos disponibles del día son :\n"+ last);
}
let user = prompt("Introduce un nombre de usuario");
if (user === null || user=== ""){
    console.log("Adios");
}else {
    console.log("Bienvenido usuario "+user);
    showFlights()
    middleCost()
    lastFlights()
}