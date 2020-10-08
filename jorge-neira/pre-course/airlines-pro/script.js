/* 
Añadidas una serie de modificaciones para corregir los errores comentados.
*/

let flights = [
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
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }];

//*************************************AUTO ASIGNADOR DE ID'S**************************************** */
let flightsDisplay = [];
const idAutoAsign = () => {
    let counter = 0;
    while (counter < flights.length) {
        const idChanger = flights.map(function (obj) {
            obj.id = counter;
            counter++;
            return obj;
        })
        flightsDisplay = idChanger;
    }
}
//***************************************BIENVENIDA + INFORMACION DE LOS VUELOS ************************************** */
const wellcome = () => {
    idAutoAsign();
    const userName = prompt("Bienvenid@, ¿cual es tu nombre?");
    let userNameCap = "";
    userName != "" && userName != null ? userNameCap = userName[0].toUpperCase() + userName.substring(1).toLowerCase() : userNameCap = "John Doe";
    alert(`Bienvenid@ ${userNameCap} a Aerolineas Skylab`);
    console.log("%cEstos son los siguientes Vuelos disponibles:\n", "font-weight: bold; font-size: 13px");

    let averageCost = 0;
    let flyWithScale = 0;
    
    for (let i = 0; i < flightsDisplay.length; i++) {
        if (flightsDisplay[i].scale === false) {
            console.log("\t- El vuelo con origen " + `%c${flightsDisplay[i].from}` + " %cy destino " + `%c${flightsDisplay[i].to}` + " %ctiene un coste de " + `%c${flightsDisplay[i].cost + "€"}` + " %cy no realiza ninguna escala.", "color: orange", "", "color: orange", "", "color: orange", "");
        } else {
            flyWithScale += 1;
            console.log("\t- El vuelo con origen " + `%c${flightsDisplay[i].from}` + " %cy destino " + `%c${flightsDisplay[i].to}` + " %ctiene un coste de " + `%c${flightsDisplay[i].cost + "€"}` + " %cy realiza escala.", "color: orange", "", "color: orange", "", "color: orange", "");
        }
        averageCost += flightsDisplay[i].cost;
    }

    const lastFly = flightsDisplay.slice(flightsDisplay.length - 5);
    console.log(`\nEste es el precio de los vuelos ${userNameCap} %c${(averageCost / flightsDisplay.length).toFixed(2) + "€"}. \n%cUn total de %c${flyWithScale} %cvuelos realizan escala.`, "color: orange", "", "color: orange", "");
    console.log("Ultimos vuelos con destino:");
    
    let z = 0;
    while (z < lastFly.length) {
        console.log(`\t- ${lastFly[z].to}`);
        z++
    };
    loginName();
}

//*************************************MENU PRINCIPAL**************************************** */
const loginName = () => {
    const userLoginName = prompt(`¿Desea entrar como: Admin[1] Usuario?[2] Salir[3]?`);
    switch (userLoginName) {
        case "1":
            let checkAnswer = false;
            do {
                const addOrDelFly = prompt(`Añadir un nuevo vuelo[1] \nEliminar vuelo[2] \nVolver[3]`);
                checkAnswer = false;
                switch (addOrDelFly) {
                    case "1":
                        addNewFly();
                        break;
                    case "2":
                        delFlyValue();
                        break;
                    case "3":
                    case null:
                        loginName();
                        break;
                    default:
                        checkAnswer = true;
                        alert("Introducir solo las opciones disponibles.")
                }
            } while (checkAnswer);
            break;
        case "2":
            displayUser();
            break;
        case "3":
        case null:
            return alert("Hasta Luego, vuelva pronto!")
        default:
            alert("Introducir solo las opciones disponibles");
            loginName()
    }
}   

//***************************************AÑADIR UN VUELO************************************** */

const addNewFly = () => {
    let passNewFlyValues = [];
    passNewFlyValues = [];
    const newIdValue = flightsDisplay.length;
    const myRegexTest = /^[a-z\s]*$/i;
    if (flightsDisplay.length == 16) {
        alert("Maximo de Vuelos alcanzado!");
        loginName();
    } else {
        const confirmIdValue = confirm(`Desea crear el nuevo Vuelo con ID: ${newIdValue}`);
        if (confirmIdValue === true && flightsDisplay.length < 16) {
            let newTo, newFrom, newCost, newScale;
            let z = 0;
            while (z < 4) {
                switch (z) {
                    case 0:
                        newTo = prompt("Introduzca el Origen:");
                        if (newTo === null || newTo === "") {
                            continue;
                        } else if (myRegexTest.test(newTo) === false) {
                            continue;
                        } else {
                            z++;
                        }
                        break;
                    case 1:
                        newFrom = prompt("Introduzca el Destino");
                        if (newFrom === null || newFrom === "") {
                            continue;
                        } else if (myRegexTest.test(newFrom) === false) {
                              continue;
                        } else {
                            z++;
                        }
                        break;
                    case 2: 
                        newCost = prompt("Coste del Vuelo:");
                        if (isNaN(newCost) && newCost != "") {
                            continue;
                        } else {
                            z++;
                        }
                        break;
                    case 3:
                        newScale = prompt(`Hace escala? Si[1], No[2]`);
                        switch (newScale) {
                            case "1":
                                newScale = true
                                z++
                                break;
                            case "2": 
                                newScale = false
                                z++
                                break;
                            default:
                                alert("Introduzca unicamente las opciones disponibles!")
                                break;
                        }
                        break;
                }
            }
            passNewFlyValues.push(newIdValue, newTo, newFrom, newCost, newScale);
        } else {
            loginName();
        }
    }
    myNewFly = new getNewFly(...passNewFlyValues);
    function getNewFly(id, to, from, cost, scale) {
        return {
            id: id,
            to: to[0].toUpperCase() + to.substring(1).toLowerCase(),
            from: from[0].toUpperCase() + from.substring(1).toLowerCase(),
            cost: parseFloat(cost),
            scale: scale,
        }
    }
    console.log(`Nuevo vuelo con ID: ${myNewFly.id} \nOrigen: ${myNewFly.from} \nDestino: ${myNewFly.to} \nCoste: ${myNewFly.cost}€ \nEscala: ${myNewFly.scale} \nHan sido añadidos correctamente!`);
    flights.push(myNewFly);
    idAutoAsign();
    loginName();
}
//***************************************ELIMINAR UN VUELO************************************** */
const delFlyValue = () => {
    const delRequest = confirm("¿Desea realmente eliminar un vuelo?");
    if (delRequest == true) {
        console.log("\n%c¿Cual de los siguientes vuelos desea eliminar?", "font-weight: bold; font-size: 13px");
        for (let i = 0; i < flightsDisplay.length; i++) {
            console.log(`Vuelo con id: ${flightsDisplay[i].id}, Destino: ${flightsDisplay[i].to}, Origen: ${flightsDisplay[i].from}`);
        }
        let e = true;
        do {
            const idToDelete = parseFloat(prompt("Escriba la id que desea eliminar", 0));
            if (isNaN(idToDelete)) {
                alert("Introduce unicamente la ID que deseas eliminar!")
            } else {
                let checkVal = false;
                flightsDisplay.forEach(flight => {
                    if (flight.id === idToDelete) {
                        checkVal = true; 
                    } 
                });
                if (checkVal === true) {
                    e = false
                    flights.splice(idToDelete, 1);
                    console.log(`\nVuelo con id: ${flightsDisplay[idToDelete].id}, Destino: ${flightsDisplay[idToDelete].to}, Origen: ${flightsDisplay[idToDelete].from}\nEliminado correctamente!`);
                    idAutoAsign();
                    loginName()
                } else {
                    alert("El numero introducido no existe!")
                }
            }
        } while (e === true);
    } else {
        loginName();
    }
}
//************************************COMPRAR UN VUELO***************************************** */
const displayUser = () => {
    let userOption = parseFloat(prompt(`Ordenar por: \nPrecio: más barato primero[1] \nPrecio: más caros primero[2] \nVolver[3]`));
    switch (userOption) {
        case 1:
            flightsDisplay.sort(function (a, b) {
                return a.cost - b.cost;
            });
            flightsDisplay.forEach(flightDisplay => console.log(`Vuelo con ID: ${flightDisplay.id} Origen: ${flightDisplay.from} Destino: ${flightDisplay.to} Coste: ${flightDisplay.cost}€ Escala: ${flightDisplay.scale}`));
            break;
        case 2:
            flightsDisplay.sort(function (a, b) {
                return b.cost - a.cost;
            });
            flightsDisplay.forEach(flightDisplay => console.log(`Vuelo con ID: ${flightDisplay.id} Origen: ${flightDisplay.from} Destino: ${flightDisplay.to} Coste: ${flightDisplay.cost}€ Escala: ${flightDisplay.scale}`));
            break;
        case 3:
            loginName();
            break;
        default:
            alert("Introduce una de las opciones disponibles!")
            displayUser();
    }
    let idToBuyExist = false
    do {
        let buyId = parseFloat(prompt("Escriba la ID que desea comprar!", 0));
        flightsDisplay.forEach(idBought => {
            if (idBought.id === buyId) {
                idToBuyExist = true;
            }
        });
        idToBuyExist === true ? console.log(`Gracias por comprar el Vuelo con ID: ${buyId}, vuelva pronto!`) : alert("ID no disponible!")
    } while (idToBuyExist === false);
}

wellcome()