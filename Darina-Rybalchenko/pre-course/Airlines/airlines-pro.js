let flights = [
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
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];
let numberOfFlights = flights.length;
let newDestination;
let newOrigin;
let newCost;
let deleteId;
let samePriceOfFlight;
let findId = false;

function airlinesPro() {

    askName();

    console.log("Los vuelos de hoy son:")
    friendlyPrint(flights);

    printAverageCost();

    printNumberOfFlightsWithScales()

    console.log("Los ultimos 5 vuelos son:")
    const lastFlights = flights.slice(6)

    friendlyPrint(lastFlights)

    askAdminOrUser()

}

function askName() {
    let name = prompt("Introduzca tu nombre");
    if (name === null || name === "") {
        alert(`Tienes que introducir el nombre correcto`)
        askName();
    } else {
        alert(`${name}!\nBienvenido a SkyLab AirlinesPro!`)
    }
}

function friendlyPrint(flightsList) {
    for (let i = 0; i < flightsList.length; i++) {
        if (!flightsList[i].scale) {
            console.log(`El vuelo con origen ${flightsList[i].from} y destino ${flightsList[i].to} tiene un coste ${flightsList[i].cost} y no realiza ninguna escala`)
        } else {
            console.log(`El vuelo con origen ${flightsList[i].from} y destino ${flightsList[i].to} tiene un coste ${flightsList[i].cost} y realiza una escala`)
        }
    }
}

function friendlyPrintWithId(flightsList) {
    for (let i = 0; i < flightsList.length; i++) {
        if (!flightsList[i].scale) {
            console.log(`El vuelo (ID ${flightsList[i].id}) con origen ${flightsList[i].from} y destino ${flightsList[i].to} tiene un coste ${flightsList[i].cost} y no realiza ninguna escala`)
        } else {
            console.log(`El vuelo (ID ${flightsList[i].id}) con origen ${flightsList[i].from} y destino ${flightsList[i].to} tiene un coste ${flightsList[i].cost} y realiza una escala`)
        }
    }
}

function printAverageCost() {
    let sumCost = 0;
    for (let i = 0; i < numberOfFlights; i++) {
        sumCost += flights[i].cost;
    }
    const averageCost = (sumCost / numberOfFlights).toFixed(0)
    console.log(`El coste medio de los vuelos es ${averageCost} euros`)
}

function printNumberOfFlightsWithScales() {
    let scaleFlights = 0;
    for (let i = 0; i < numberOfFlights; i++) {
        if (flights[i].scale) scaleFlights += 1
    }
    console.log(`Hay ${scaleFlights} vuelos con escala`)
}

function askAdminOrUser() {
    let answer = prompt("Por favor indica si eres ADMIN o USUARIO")
    answer.toUpperCase();
    switch (answer) {
        case "admin":
            alert("Bienvenido Admin")
            admin();
            break;
        case "usuario":
            alert("Bienvenido Usuario");
            user();
            break;
        default:
            alert("Por favor introduzca la informacion correcta")
            askAdminOrUser()
    }
}

function admin() {
    let adminOption = prompt("Por favor escoje una de las opsiones: añadir vuelos(add), eliminiar vuelos(delete)")
    switch (adminOption) {
        case "add":
            addFlight()
            break;
        case "delete":
            deleteFlight()
            break;
        default:
            alert("Debe escojer una de las opciones")
            admin()
    }
}

function addFlight() {
    if (numberOfFlights === 15) {
        alert("No puedes introducir mas de 15 vuelos.")
        return
    }
    newDestination = prompt("Introduzca un nuevo destino", newDestination)
    if (isNaN(newDestination) == false || newDestination === null || newDestination === "") {
        alert("Por favor introdusca la informacion correcta")
        addFlight();
    }

    newOrigin = prompt("Introduzca un nuevo origen", newOrigin)
    if (isNaN(newOrigin) == false || newOrigin === null || newOrigin === "") {
        alert("Por favor introdusca la informacion correcta")
        addFlight();
    }

    newCost = prompt("Introduzca un coste.", newCost);
    if (isNaN(newCost)) {
        alert("Por favor introdusca la informacion correcta")
        addFlight();
    }

    newScale = prompt("Introduzca si el vuelo tiene escala. si o no");
    switch (newScale) {
        case "si":
            newScale = true
            break
        case "no":
            newScale = false
            break;
        default:
            alert("Por favor introdusca la informacion correcta")
            addFlight();
    }

    flights.push({ id: numberOfFlights, to: newDestination, from: newOrigin, cost: newCost, scale: newScale });
    numberOfFlights += 1
    console.log("%cSe ha añadido un nuevo vuelo al final de la lista", "color: blue")
    friendlyPrint(flights);

    if (window.confirm("Quiere añadir mas vuelos?")) {
        addFlight();
    } else {
        alert("Gracias por visitarnos")
        return
    }
}

function deleteFlight() {
    deleteId = prompt("Por favor introduzca el ID de vuelo que desea eliminar")
    if (isNotANumber(deleteId)) return deleteFlight()
    for (let i = 0; i < flights.length; i++) {
        if (parseFloat(deleteId) === flights[i].id) {
            findId = true;
            flights.splice(i, 1)
            console.log(`Se ha borrado el vuelo con ID ${deleteId}. (Origen ${flights[i].from}, destino ${flights[i].to},precio ${flights[i].cost} euros)`)
            console.log("A continuacion se mostrará la lista de vuelos actualizada")
            friendlyPrint(flights)
        }
    }
    if (!findId) {
        alert("No se ha encontrado el ID introducido")
        return deleteFlight()
    }
    if (window.confirm("Desea eliminar otro vuelo?")) {
        deleteFlight()
    } else {
        alert("Gracias por visitarnos")
    }
}

function user() {
    let userOption = prompt("Por favor indica si quiere ordenar los vuelos por el precio mas bajo(1), mas alto(2) o igual(3).")
    switch (userOption) {
        case "1":
            sortByLowerPriceOfFlight();
            break;
        case "2":
            sortByHigherPriceOfFlight();
            break;
        case "3":
            sortBySamePriceOfFlight();
            break;
        default:
            alert("Por favor introduzca la informacion correcta")
            user();
    }
}

function sortByLowerPriceOfFlight() {
    console.log("El listdo de precios ordenados de menor a mayor")
    flights.sort(function (a, b) { return a.cost - b.cost })
    friendlyPrintWithId(flights)
    buyFlightById()
}

function sortByHigherPriceOfFlight() {
    console.log("El listdo de precios ordenados de mayor a menor:")
    flights.sort(function (a, b) { return b.cost - a.cost })
    friendlyPrintWithId(flights)
    buyFlightById()
}

function sortBySamePriceOfFlight() {
    const selectedPrice = prompt("Introduzca el precio deseado")
    if (isNotANumber(selectedPrice)) return sortBySamePriceOfFlight()
    const flightsFound = flightsWithSamePrice(parseFloat(selectedPrice))
    if (flightsFound.length > 0) {
        console.log(`Se han encontrado los siguentes vuelos con el precio ${selectedPrice} euros:`)
        friendlyPrintWithId(flightsFound)
        buyFlightById()
    } else {
        alert("No se ha encontrado el vuelo con este precio")
        confirm("Quieres buscar otro vuelo?")
        sortBySamePriceOfFlight()
    }
}

function flightsWithSamePrice(selectedPrice) {
    return flights.filter(flight => flight.cost === selectedPrice)
}

function buyFlightById() {
    let buyFlight = prompt("Por favor introduzca el ID de vuelo que quiere comprar:")
    if (isNotANumber(buyFlight)) return buyFlightById()
    for (let i = 0; i < flights.length; i++) {
        if (parseFloat(buyFlight) === flights[i].id) {
            findId = true
            console.log(`Has comprado el vuelo con ID nº ${buyFlight} con origen ${flights[i].from} y destino ${flights[i].to}, con el precio ${flights[i].cost} euros`)
            alert("Gracias por tu compra!")
        }
    }
    if (!findId) {
        alert("No se ha encontrado el ID introducido")
        buyFlightById()
    }
    if (window.confirm("Desea comprar otro vuelo?")) {
        buyFlightById()
    } else {
        alert("Gracias por visitarnos")
    }
}

function isNotANumber(value) {
    if (isNaN(value) || value === "" || value === null) alert("Tiene que ser un numero")
}

airlinesPro(); 