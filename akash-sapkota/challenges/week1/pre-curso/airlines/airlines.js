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

let user 

user = prompt("Introduzca su usuario","User")
console.log(`Bienvenido ${user} al skylab airlines`);
console.log("A continuación verá todos los vuelos disponible");  
let costeTotal = 0
let numeroVuelos = 0
let vuelosConEscala = 0
let costeMedio

function quitarDecimals(numero) {
    return parseFloat(numero.toFixed(3))
}
flights.forEach(eachFlight => {
    
    if(eachFlight.scale === true){
        console.log(`El vuelo con origen: ${eachFlight.from}, y destino: ${eachFlight.to} con precio ${eachFlight.cost}€ realiza una escalaa`);
        vuelosConEscala ++

    }else if(eachFlight.scale === false){
        console.log(`El vuelo con origen: ${eachFlight.from}, y destino: ${eachFlight.to} con precio ${eachFlight.cost}€ realiza ninguna escalaa`);

    }
    costeTotal = costeTotal + eachFlight.cost
    numeroVuelos ++
});

costeMedio = costeTotal/numeroVuelos
console.log(`El coste Medio de los vuelos es ${quitarDecimals(costeMedio)}`);
console.log(`${vuelosConEscala} vuelos efectuan escalas`);
console.log(`Los ultimos 5 destinos del dia son:`);
let ultimos5Destinos = flights.slice(6,flights.length)
ultimos5Destinos.forEach(eachFlight => {
    console.log(eachFlight.to);
})