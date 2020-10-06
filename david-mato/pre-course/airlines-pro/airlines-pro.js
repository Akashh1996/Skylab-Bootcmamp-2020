
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

function letterFormat (a) {
        a = a[0].toUpperCase() + a.slice(1);
        a = a[0] + a.slice(1).toLowerCase();
        return a;
}

var count = 0;
var userName;

function consoleFlights () {

    count += 1

    if (count === 1) {
        do {
            userName = prompt('Introduce tu nombre:');
            if (userName === "") {
                alert('Debes añadir un nombre o darle a cancelar.');
            }
        } while (userName !== null && !isNaN(userName) || userName === "")

        if (userName){
            userName = letterFormat(userName)
            console.log(`¡Bienvenido, ${userName}!`);
        } else {
            console.log('¡Bienvenido!');
        }
    } else if (userName) { 
        console.log(`¡Bienvenido, ${userName}!`);
    } else {
        console.log('¡Bienvenido!');
    }
    
    console.log('\nLos vuelos para el día de hoy son los siguientes:\n ');

    var totalCost = 0;
    var totalScale = 0;
    var lastDestinations = "";

    for (const flight of flights) {

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

function deleteFlight () {

    console.log('\n%cID de los vuelos disponibles:\n', 'font-weight: bold; font-size: 12px');
    var flightIDs = "";

    for (flight of flights) {
        flightIDs += `\t· Vuelo ${flight.from} - ${flight.to}. ID: ${('0' + flight.id).slice(-2)}.\n`;
    }

    console.log(flightIDs)

    do {
        var flightID = prompt("Introduce el ID del vuelo a eliminar:");
        var correctID = flights.find(obj => {return obj.id == flightID});
        if (isNaN(Number(flightID))) {
            alert("No se admiten letras, solo números.");
        }
        if (correctID == undefined && flightID !== "" && flightID !== null) {
            do {
                flightID = prompt("Por favor, introduce un ID correcto:");
                correctID = flights.find(obj => {return obj.id == flightID})
            } while (flightID === "" || flightID === null || correctID == undefined);
        } 
    } while (flightID === "" || flightID === null)

    var indexOfFlight = flights.findIndex(item => item.id == flightID);
    var deletedFlight = flights.splice(indexOfFlight, 1);
    console.clear();
    consoleFlights();
    console.log(flights);
    return deletedFlight;
}

function addFlights() {

    if (flights.length >= 15) {
        alert("Lo sentimos, no puede haber más de 15 vuelos"); 
    } else {
        const objectFlight = {};
        var maxid = 0;
        flights.map(function(obj){if (obj.id > maxid) maxid = obj.id})
        objectFlight.id = maxid + 1;
        do {
            objectFlight.to = prompt("Introduce el destino del vuelo");
            if (objectFlight.to !== null && objectFlight.to !== '') {
                objectFlight.to = letterFormat(objectFlight.to);
            }
        } while (objectFlight.to === null || objectFlight.to === '' || !isNaN(Number(objectFlight.to)))
        do {
            objectFlight.from = prompt("Introduce el lugar de origen del vuelo");
            if (objectFlight.from !== null && objectFlight.from !== '') {
                objectFlight.from = letterFormat(objectFlight.from);
            }
        } while (objectFlight.from === null || objectFlight.from === '' || !isNaN(Number(objectFlight.from)))
        do {
            objectFlight.cost = +prompt("Introduce el precio del vuelo");
            if (isNaN(objectFlight.cost)) {
                alert("No se admiten letras, solo números.");
            } 
        } while (objectFlight.cost === 0 || isNaN(objectFlight.cost))
        do {
            objectFlight.scale = prompt("¿El vuelo hace escala? Sí/No");
            if(objectFlight.scale !== null){
               objectFlight.scale = objectFlight.scale.toLowerCase();
               objectFlight.scale = objectFlight.scale.normalize("NFD").replace(/[\u0300-\u036f]/g, "");  
            }  
            if (objectFlight.scale !== 'si' && objectFlight.scale !== 'no') { 
                alert('Por favor, introduce una de las opciones')
            }
        } while (objectFlight.scale !== 'si' && objectFlight.scale !== 'no')
        if (objectFlight.scale === 'si') {
            objectFlight.scale = true;
        } else {
            objectFlight.scale = false;
        }
        flights.push(objectFlight);
        console.clear();
        consoleFlights();
        console.log(flights);
        return objectFlight;
    }

}

function airline () {

    consoleFlights();

    setTimeout(function(){       

        do {
            var adminOrUser = prompt("¿Eres administrador o usuario?", "admin/usuario");
            if (adminOrUser !== null) {
                var adminOrUserLowerCase = adminOrUser.toLowerCase();
            }
        } while (adminOrUserLowerCase !== "administrador" && adminOrUserLowerCase !== "admin" && adminOrUserLowerCase !== "usuario")

        switch (adminOrUserLowerCase) {
            case "administrador":
            case "admin":

                do {

                    do {
                        var adminOption = prompt("¿Qué deseas hacer? Introduce una de las opciones:\n\n1. Crear un vuelo.\n2. Eliminar un vuelo.\n3. Salir.\n"); 
                        if (isNaN(Number(adminOption))) {
                            alert("No se admiten letras, solo números.")
                        }
                    } while (+adminOption !== 1 && +adminOption !== 2 && +adminOption !== 3)

                    switch (+adminOption) {
                        case 1:
                            var objectFlight1 = addFlights();
                            if (objectFlight1) {
                                do {
                                    var addFlight = confirm(`Has creado el vuelo ${objectFlight1.from} - ${objectFlight1.to}. Precio: ${objectFlight1.cost} €. ${objectFlight1.scale ? "Con escala" : "Sin escala"}. ID: ${('0' + objectFlight1.id).slice(-2)}.\n¿Quieres crear otro vuelo?`);
                                    if (addFlight) {
                                        if (flights.length >= 15) {
                                            alert("Lo sentimos, no puede haber más de 15 vuelos"); 
                                            addFlight = false;  
                                        } else {
                                            objectFlight1 = addFlights();
                                        }
                                    }
                                } while (addFlight)
                            }
                            break;
                        case 2:
                            let deletedFlight = deleteFlight();
                            do {
                                var deleteFlight1 = confirm(`Has eliminado el vuelo ${deletedFlight[0].from} - ${deletedFlight[0].to}, con ID: ${('0' + deletedFlight[0].id).slice(-2)}.\n¿Quieres eliminar otro vuelo?`);
                                if (deleteFlight1) {
                                    deletedFlight = deleteFlight();
                                } 
                            } while (deleteFlight1)
                            break;
                        case 3:
                            userName ? alert(`¡Hasta pronto, ${userName}!`) : alert('¡Hasta pronto!');
                            break;
                    } 

                } while (+adminOption !== 3)
                break;
            case "usuario":
                var referencePrice;
                do {
                    userName ? referencePrice = prompt(`${userName}, introduce un precio de referencia:`) : referencePrice = prompt('Introduce un precio de referencia:');
                    if (isNaN(Number(referencePrice))) {
                        alert("No se admiten letras, solo números.");
                    } 
                } while (referencePrice === null || isNaN(Number(referencePrice)) || referencePrice === "")

                function tee(a, fn) {
                  var non_matches = [];
                  var matches = a.filter(function(e, i, a) {
                    var match = fn(e, i, a);
                    if (!match) non_matches.push(e);
                    return match;
                  })
                  return matches.concat(non_matches);
                }

                var sortedByPrice = flights.sort((a, b) => (a.cost > b.cost) ? 1 : (a.cost === b.cost) ? ((a.id > b.id) ? 1 : -1) : -1 );
                sortedByPrice = tee(sortedByPrice, e => e.cost == referencePrice);

                var samePrice = '';
                var lowerPrice = '';
                var higherPrice = '';

                for (flight of sortedByPrice) {
                    if (flight.cost == referencePrice){
                        samePrice += `\t· ${flight.from} - ${flight.to}. Precio: ${flight.cost} €. ID: ${('0' + flight.id).slice(-2)}.\n `;
                    } else if (flight.cost < referencePrice) {
                        lowerPrice += `\t· ${flight.from} - ${flight.to}. Precio: ${flight.cost} €. ID: ${('0' + flight.id).slice(-2)}.\n `;
                    } else if (flight.cost > referencePrice){
                        higherPrice += `\t· ${flight.from} - ${flight.to}. Precio: ${flight.cost} €. ID: ${('0' + flight.id).slice(-2)}.\n `;
                    }
                }

                if (samePrice) {
                    console.log(`\nVuelo(s) con precio coincidente:\n\n${samePrice}`);
                } else {
                    console.log('\nNo hay vuelos con el precio proporcionado.\n ');
                }

                if (lowerPrice) {
                    console.log(`\nVuelo(s) con un precio inferior al proporcionado:\n\n${lowerPrice}`);
                } else {
                    console.log('\nNo hay vuelos con un precio inferior al proporcionado.\n ');
                }

                if (higherPrice) {
                    console.log(`\nVuelo(s) con un precio superior al proporcionado:\n\n${higherPrice}`);
                } else {
                    console.log('\nNo hay vuelos con un precio superior al proporcionado.\n ');
                }

                do {
                    var buyingFlight = prompt("Por favor, introduce el ID del vuelo que deseas comprar:");
                    var correctID = flights.find(obj => {return obj.id == buyingFlight});
                    if (isNaN(Number(buyingFlight))) {
                        alert("No se admiten letras, solo números.");
                    }
                    if (correctID == undefined && buyingFlight !== "" && buyingFlight !== null) {
                        do {
                            buyingFlight = prompt("Por favor, introduce un ID correcto:");
                            correctID = flights.find(obj => {return obj.id == buyingFlight})
                        } while (buyingFlight === "" || buyingFlight === null || correctID == undefined);
                    } 
                } while (buyingFlight == "")

                if (buyingFlight === null) {
                    userName ? alert(`¡Hasta pronto, ${userName}!`) : alert('¡Hasta pronto!');
                } else {
                    console.log(`%cHas comprado el vuelo ${correctID.from} - ${correctID.to}, con ID: ${('0' + correctID.id).slice(-2)}, por ${correctID.cost} €.`,'font-weight: bold; font-size: 12px');
                    userName ? alert(`Gracias por tu compra. ¡Hasta pronto, ${userName}!`) : alert('Gracias por tu compra. ¡Hasta pronto!');
                }
                
                break;

        }

    }, 2000);

}

airline();
