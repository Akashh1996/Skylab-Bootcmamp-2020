/* 
- Interfaz de usuario para una aerolinea (por consola).
- La aerolínea dispondrá de 10 vuelos para el día.
- Los vuelos deben declararse de manera global cuando se llame a la función.

*/

var flight0 = {
    from: "Madrid",
    to: "Barcelona",
    price: 140,
    stops: 0
};

var flight1 = {
    from: "Madrid",
    to: "Bilbao",
    price: 110,
    stops: 0
};

var flight2 = {
    from: "Madrid",
    to: "Mallorca",
    price: 230,
    stops: 1
};

var flight3 = {
    from: "Barcelona",
    to: "Valencia",
    price: 85,
    stops: 0
};

var flight4 = {
    from: "Barcelona",
    to: "Lisbon",
    price: 170,
    stops: 1
};

var flight5 = {
    from: "Valencia",
    to: "Bilbao",
    price: 120,
    stops: 0
};

var flight6 = {
    from: "Valencia",
    to: "Seville",
    price: 260,
    stops: 0
};

var flight7= {
    from: "Bilbao",
    to: "Seville",
    price: 295,
    stops: 1
};

var flight8 = {
    from: "Seville",
    to: "Barcelona",
    price: 145,
    stops: 2
};

var flight9 = {
    from: "Tenerife",
    to: "Madrid",
    price: 350,
    stops: 2
};

// Se preguntará por el nombre de usuario y dará la bienvenida.

var username;

do {
    username = prompt("Por favor, introduzca su nombre:");

} while (isFinite(username) || username === null);

console.log(`Bienvenido ${username}, estos son los vuelos con salida durante el día de hoy:`);

// El usuario visualizará todos los vuelos disponibles de una forma amigable.

for (const f0var in flight0) {
    console.log(f0var, flight0[f0var]);
}
console.log("-- siguiente vuelo --");

for (const f1var in flight1) {
    console.log(f1var, flight1[f1var]);
}
console.log("-- siguiente vuelo --");

for (const f2var in flight2) {
    console.log(f2var, flight2[f2var]);
}
console.log("-- siguiente vuelo --");

for (const f3var in flight3) {
    console.log(f3var, flight1[f3var]);
}
console.log("-- siguiente vuelo --");

for (const f4var in flight4) {
    console.log(f4var, flight4[f4var]);
}
console.log("-- siguiente vuelo --");

for (const f5var in flight5) {
    console.log(f5var, flight5[f5var]);
}
console.log("-- siguiente vuelo --");

for (const f6var in flight6) {
    console.log(f6var, flight6[f6var]);
}
console.log("-- siguiente vuelo --");

for (const f7var in flight7) {
    console.log(f7var, flight7[f7var]);
}
console.log("-- siguiente vuelo --");

for (const f8var in flight8) {
    console.log(f8var, flight8[f8var]);
}
console.log("-- siguiente vuelo --");

for (const f9var in flight9) {
    console.log(f9var, flight9[f9var]);
}

// A continuación, el usuario verá el coste medio de los vuelos.

var price_rounded = 0;

function flight_price(x) {
    return price_rounded += x.price;
}

flight_price(flight0);
flight_price(flight1);
flight_price(flight2);
flight_price(flight3);
flight_price(flight4);
flight_price(flight5);
flight_price(flight6);
flight_price(flight7);
flight_price(flight8);
flight_price(flight9);

console.log(`El precio medio de todos los vuelos es ${parseFloat(price_rounded / 10).toFixed(2)} euros.`);

// También podrá ver cuántos vuelos efectúan escalas.

var num_stops = 0;

function flight_with_stops(y) {
    if  (y.stops === 0) {
        return;
    } else {
        return num_stops += 1;
    }
}

flight_with_stops(flight0);
flight_with_stops(flight1);
flight_with_stops(flight2);
flight_with_stops(flight3);
flight_with_stops(flight4);
flight_with_stops(flight5);
flight_with_stops(flight6);
flight_with_stops(flight7);
flight_with_stops(flight8);
flight_with_stops(flight9);

console.log(`Hay ${num_stops} vuelo(s) que tienen al menos una escala.`)

// Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.

function last_flights(z) {
    console.log(z.to);
}

console.log('Los destinos de los últimos cinco vuelos son los siguientes:')

last_flights(flight5);
last_flights(flight6);
last_flights(flight7);
last_flights(flight8);
last_flights(flight9);

// NOTA: Teniendo en cuenta el último enunciado, creo que tiene más sentido si todos los vuelos parten del mismo aeropuerto. Esto se podría cambiar sin problema.
