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

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];


let flightBought = [];
var flightsChosen = [];

function flight () {

var name;
var totalPrice = 0;
var totalScales = 0;
var lastFlights = [];

name = prompt("Introduzca su nombre: ");

if (name == null) {
    let finalChoice = prompt("Seguro que desea salir? \n1.-Si \n2.-No")
        if (finalChoice == 1) {
            console.log("Bye!");
        } else if (finalChoice == 2 || finalChoice == null) {
            return flight();
        } else {
            console.log("Press 1 or 2");
            return flight();
        }
    
} else if (name == "" || isNaN(name) === false ) {
    console.log("Introduzca un nombre!");
    return flight();
    
    } else {

        console.log("Bienvenido " + name);

        for (var i = 0; i < flights.length; i++ ) {
            if (flights[i].scale == true) {
                scale = " y realizara escala";
                totalScales = totalScales + 1;
            } else {
                scale = " y no realizara ninguna escala";
            }
            console.log("El vuelo con origen: " + flights[i].from + ", y destino: " + flights[i].to + " tiene un coste de: " + flights[i].cost + scale);

            totalPrice = totalPrice + flights[i].cost;

        }

        console.log ("El coste medio de los vuelos es: " + (totalPrice / flights.length).toFixed(2));

        console.log("Hay un total de " + totalScales + " vuelos que realizan escala.");

        for (var j = flights.length - 1; j >= flights.length - 5; j--) {
            lastFlights.push(flights[j].to);
           }

        console.log("Destinos de los ultimos vuelos del día son: " + lastFlights);

        return firstMenu();

    }
}

function firstMenu () {
    let answerFirstMenu = 0;

    answerFirstMenu = prompt ("Choose your next action: \n1.-Buy a flight \n2.-LogIn as Admin \n3.-Exit");

    if (answerFirstMenu == 1) {

        return userMenu();

    } else if (answerFirstMenu == 2 ) {

        return adminMenu();

    } else if  (answerFirstMenu == 3 || answerFirstMenu == null) {

        console.log ("Bye!");

    } else {

        console.log("Press 1, 2 or 3");
        return firstMenu();
    }
}

function adminMenu() {
    let action;

    action = prompt ("Press : \n1.-To add a flight \n2.-Remove a flight \n3.-Exit");

    if (action == 1) {

        if (flights.length == 15) {

            alert("There is already 15 flights!");
            return adminMenu();

        } else {

            return addFlight();
        }

    } else if (action == 2) {

        let idToRemove;

        for (var i = 0; i < flights.length; i++ ) {
            if (flights[i].scale == true) {
                scale = " y realizara escala";
            } else {
                scale = " y no realizara ninguna escala";
            }
            console.log("El vuelo "+ flights[i].id + " con origen: " + flights[i].from + ", y destino: " + flights[i].to + " tiene un coste de: " + flights[i].cost + scale);
        }

        idToRemove = ((prompt("type the flight id to remove: ")));

        if (isNaN(idToRemove) == true) {
            alert("Only Numbers!");
            return adminMenu();
        } else if (idToRemove < 0 || idToRemove >= flights.length) {
            alert("Id not found");
            return adminMenu();
        } else {
            flights.splice(idToRemove, 1);
            reOrdenar();
            return adminMenu();
        }
        

    } else if (action == 3 || action == null) {

        console.log ("Bye!");

    } else {

        console.log ("Press 1, 2 or 3");
        return adminMenu();

    }

}

function userMenu() {

    let userAction, userCost;
    userCost = prompt("Introduzca un precio: ");
    userAction = prompt("Desea buscar vuelos a un precio: \n1.-Mayor \n2.-Menor \n3.-Igual \n4.-Salir");

    if (userAction == 1) {

        for (let i = 0; i < flights.length; i++) {
            if (userCost < flights[i].cost) {
                flightsChosen.push(flights[i]);
            }
        }
        if (flightsChosen.length == 0) {
            console.log("No se han encontrado vuelos")
            return userMenu();
        } else {
            for (let i = 0; i < flightsChosen.length; i++) {
                flightsChosen[i].id = i;
            }

            for (let i = 0; i < flightsChosen.length; i++ ) {
                if (flightsChosen[i].scale == true) {
                    scale = " y realizara escala";
                } else {
                    scale = " y no realizara ninguna escala";
                }
                console.log("El vuelo "+ flightsChosen[i].id + " con origen: " + flightsChosen[i].from + ", y destino: " + flightsChosen[i].to + " tiene un coste de: " + flightsChosen[i].cost + scale);
            }

            return buyingMenu();
        }

    } else if (userAction == 2) {

        for (let i = 0; i < flights.length; i++) {
            if (userCost > flights[i].cost) {
                flightsChosen.push(flights[i]);
            } 
        }
        if (flightsChosen.length == 0) {
            console.log("No se han encontrado vuelos")
            return userMenu();
        } else {
            for (let i = 0; i < flightsChosen.length; i++) {
                flightsChosen[i].id = i;
            }

            for (let i = 0; i < flightsChosen.length; i++ ) {
                if (flightsChosen[i].scale == true) {
                    scale = " y realizara escala";
                } else {
                    scale = " y no realizara ninguna escala";
                }
                console.log("El vuelo "+ flightsChosen[i].id + " con origen: " + flightsChosen[i].from + ", y destino: " + flightsChosen[i].to + " tiene un coste de: " + flightsChosen[i].cost + scale);
            }

            return buyingMenu();
    }

    } else if (userAction == 3) {

        for (let i = 0; i < flights.length; i++) {
            if (userCost == flights[i].cost) {
                flightsChosen.push(flights[i]);
            } 
        }
        if (flightsChosen.length == 0) {
            console.log("No se han encontrado vuelos")
            return userMenu();
        } else {
            for (let i = 0; i < flightsChosen.length; i++) {
                flightsChosen[i].id = i;
            }

            for (let i = 0; i < flightsChosen.length; i++ ) {
                if (flightsChosen[i].scale == true) {
                    scale = " y realizara escala";
                } else {
                    scale = " y no realizara ninguna escala";
                }
                console.log("El vuelo "+ flightsChosen[i].id + " con origen: " + flightsChosen[i].from + ", y destino: " + flightsChosen[i].to + " tiene un coste de: " + flightsChosen[i].cost + scale);
            }
        
            return buyingMenu();
    }
    
    }else if (userAction == 4 || userAction == null) {

        console.log("Bye!");

    } else {

        console.log("Press 1, 2 or 3");
        return userMenu();
    }

}

function reOrdenar() {
    for (let i = 0; i < flights.length; i++) {
        flights[i].id = i;
    }
}

function addFlight() {

    let newTo, newFrom, newCost, newScale;

    newTo = prompt("Type the new destination:");
    if (isNaN(newTo) == false) {
       alert("Put correct info, please");
       return adminMenu();
    } else {
       newFrom = prompt("from:");
       if (isNaN(newFrom) == false) {
          alert("Put correct info, please");
          return adminMenu();
       } else {
             newCost = (Number (prompt("cost:")));
            if (isNaN(newCost)) {
             alert("Put correct info, please");
             return adminMenu();
            } else {
               newScale = prompt("The new flight has any scales? (1 = yes, 0 = no)");
               if (newScale == 1) {
                   newScale = true;
                   flights.push ({id: flights.length, to: newTo, from: newFrom, cost: newCost, scale: newScale});
                   console.log(flights);
                   return adminMenu();
               } else if (newScale == 0) {
                   newScale = false;
                   flights.push ({id: flights.length, to: newTo, from: newFrom, cost: newCost, scale: newScale});
                   console.log(flights);
                   return adminMenu();
               } else {
                   alert("Only press 1 or 0!");
                   return adminMenu();
               }
           }
       }
   } 
}

function buyingMenu() {

    let buyingAction = prompt("Choose the number of the flight you want to buy or press cancel to exit.");

    if (buyingAction == null) {
        console.log("Bye!");
    } else if (isNaN(buyingAction)) {
        console.log("Only numbers!");
        return buyingMenu();
    } else if (buyingAction < 0 || buyingAction >= flightsChosen.length) {
        alert("Id not found");
        return buyingMenu();
    } else {
        for (let i = 0; i < flightsChosen.length; i++){
            if (buyingAction == flightsChosen[i].id) {
                flightBought.push(flightsChosen[i]);
            }
        }

        if (flightBought[0].scale == true) {
            scale = " y realizara escala";
        } else {
            scale = " y no realizara ninguna escala";
        }

        console.log("Gracias por comprar el vuelo " + flightBought[0].id + " con origen: " + flightBought[0].from + " y destino: " + flightBought[0].to + " tiene un coste de: " + flightBought[0].cost + scale);
    }
 }

flight();