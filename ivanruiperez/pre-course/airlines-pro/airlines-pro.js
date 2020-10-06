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

// PRO

let userOrAdmin = confirm("Si eres Admin pulsa Aceptar, si no pulsa Cancelar");
if (userOrAdmin === true){
    adminMenu();
} else {userMenu()}

// USER FUNCTIONS

function flightsLowCosts(){
    let lowerFlights = flights;
    lowerFlights.sort(function(a,b){
        if (a.cost > b.cost){
            return 1;
        }else if (a.cost < b.cost){
            return -1;
        } return 0;
    });
    console.log("Los vuelos por coste más bajo son:\n");
    for (a=0; a<lowerFlights.length; a++){
        if (lowerFlights[a].scale === true){
    console.log(`ID: ${lowerFlights[a].id} con destino: ${lowerFlights[a].to} con origen ${lowerFlights[a].from} con coste: ${lowerFlights[a].cost}€ y tiene escalas.`);
    } else {
        console.log(`ID: ${lowerFlights[a].id} con destino: ${lowerFlights[a].to} con origen ${lowerFlights[a].from} con coste: ${lowerFlights[a].cost}€ y no tiene escalas.`);
    } 
    }
userMenu();
}
function flightsHighCosts(){
    let higherFlights = flights;
    higherFlights.sort(function(a,b){
        if (a.cost < b.cost){
            return 1;
        }else if (a.cost > b.cost){
            return -1;
        } return 0;
    });
    console.log("Los vuelos por coste más alto son:\n");
    for (a=0; a<higherFlights.length; a++){
        if (higherFlights[a].scale === true){
    console.log(`ID: ${higherFlights[a].id} con destino: ${higherFlights[a].to} con origen ${higherFlights[a].from} con coste: ${higherFlights[a].cost}€ y tiene escalas.`);
    } else {
        console.log(`ID: ${higherFlights[a].id} con destino: ${higherFlights[a].to} con origen ${higherFlights[a].from} con coste: ${higherFlights[a].cost}€ y no tiene escalas.`);
    } 
    }
userMenu();
}
function flightsSameCosts(){
    let price = [];
    let introPrice = Number(prompt("Busca por precio un vuelo"));
        if (isNaN(introPrice)){
            alert("Introduce solo numeros");
            flightsSameCosts()
        }else {
            price = introPrice
        }
    console.log(price);
    const samePrice = flights.filter(flights => flights.cost === price);
    if (samePrice.length === 0){
        console.log("No hay vuelos por ese precio");
    } else{ 
        console.log("Estos son los vuelos por este precio:\n");
        for (a=0; a<samePrice.length; a++){
            console.log(`ID: ${samePrice[a].id}, con destino: ${samePrice[a].to} y origen: ${samePrice[a].from}.`);
            if(samePrice[a].scale === true){
                console.log("Este vuele tiene escalas");
            } else {console.log("Este vuele no tiene escalas");}
    }
    }         
userMenu();
}
function buyFlights(){
    let buyedFlight = [];
    let idBuy = Number(prompt("Introduce el ID del vuelo que desea comprar"))
        if (isNaN(idBuy)){
        alert("Introduce solo numeros");
        buyFlights();
     } else {
        buyedFlight = idBuy;
     }
    console.log(buyedFlight);
    const bFlight = flights.filter(flights => flights.id === buyedFlight);
    if (bFlight.length === 0){
        console.log ("No hay vuelos von esa ID");
    } else {
        console.log(`Gracias por comprar el vuelo: \n ID: ${bFlight[0].id} con destino: ${bFlight[0].to} con origen: ${bFlight[0].from} por: ${bFlight[0].cost}€`);
        if (bFlight[0].scale === true){
            console.log("Este vuele tiene escalas");
        } else {console.log("Este vuelo no contiene escalas");}
    }
userMenu();

}
function userMenu(){
   
    const menu = prompt("Bienvenido, que desea hacer?\n"+
    "1. Buscar vuelo por precio de menor a mayor\n"+
    "2. Buscar vuelo por por precio de mayor a menor\n"+
    "3. Buscar vuelo por precio\n"+
    "4. Comprar vuelo\n"+
    "5. Salir");

    switch(menu){
        case "1":
            flightsLowCosts();    
            break;

        case "2":
            flightsHighCosts();
            break;

        case "3":
            flightsSameCosts();                  
            break;
        case "4":
            buyFlights();
            break;
        case "5":
            let menuUser = true;
            menuUser = confirm("Desea realizar otra operación?");
            if (menuUser === true){
                userMenu();
            }else {console.log("Hasta pronto "+ user);}
            break;
        default:
            console.log("Introduzca una opción correcta");
            userMenu();
            break;
    }
}

// ADMIN FUNCTIONS

function addFlight(){
let addF = [];
if (flights.length >= 15){
    alert("No se pueden añadir más vuelos");
}else{
    addF = { id: Number, to: String, from: String, cost: Number, scale: Boolean };
    addF.id = flights[flights.length-1].id+1;
    addF.to = String(prompt("Introduzca el destino del vuelo"));
    if (!isNaN(addF.to) || addF.to === null || addF.to ===""){
        alert ("Solo puede introducir letras");
        addFlight();
    }
    addF.from = String(prompt("Introduzca de donde sale el vuelo"));
    if (!isNaN(addF.from) || addF.from === null || addF.from ===""){
        alert ("Solo puede introducir letras");
        addFlight();
    }
    addF.cost = Number(prompt("Introduzca cuanto cuesta este vuelo"));
        if (isNaN(addF.cost) || addF.cost === null || addF.cost ===""){
            alert ("Solo puede introducir números");
            addFlight();
        }
    addF.scale = Boolean(confirm("Si el vuelo tiene escalas pulse 'Aceptar', si no pulse 'Cancelar'"));
}
flights.push(addF);
alert("Vuelo añadido correctamente");  
adminMenu();
}

function deleteFlight(){
    let delFlight = [];
    let del = prompt("Introduce el ID del vuelo que desea eliminar");
    for (d=0; d<flights.length; d++){
        if(flights[d].id == del){
           delFlight = flights.splice(d+1, 1);
           console.log("El vuelo eliminado es:");
           if (flights[d].scale === true){
           console.log(`ID: ${flights[d].id} con destino: ${flights[d].to} con origen: ${flights[d].from} con precio: ${flights[d].cost}€ y tenía escalas`);
           } else {
            console.log(`ID: ${flights[d].id} con destino: ${flights[d].to} con origen: ${flights[d].from} con precio: ${flights[d].cost}€ y no tenía escalas`);
           } 
        }
    }
        if (delFlight === "" || delFlight === null){
          console.log("No se ha eliminado ningún vuelo");
        }
adminMenu()
    }

function adminMenu(){
    const amenu = prompt("Bienvenido, que desea hacer?\n"+
    "1. Añadir un nuevo vuelo\n"+
    "2. Eliminar un vuelo\n"+
    "3. Visualizar vuelos existentes\n"+
    "4. Salir");

    switch(amenu){
        case "1":
            addFlight();    
            break;

        case "2":
            deleteFlight();
            break;

        case "3":
            console.log("Los vuelos disponibles del día son:");
            for (f=0; f<flights.length; f++){
                if (flights[f].scale === true){
                    console.log("ID del vuelo "+flights[f].id+", con destino a "+flights[f].to+", con origen "+flights[f].from+" ,tiene un coste de "+flights[f].cost+" y tiene escala.");
                } else{
                console.log("ID del vuelo "+flights[f].id+", con destino a "+flights[f].to+", con origen "+flights[f].from+" ,tiene un coste de "+flights[f].cost+" y no tiene escala");
                }
            }    
            adminMenu();              
            break;

        case "4":
            let menuAdmin = true;
            menuAdmin = confirm("Desea realizar otra operación?");
            if (menuAdmin === true){
                adminMenu();
            } else {console.log("Hasta pronto "+ user);}
            break;
        default:
            console.log("Introduce una opción correcta");
            adminMenu();
            break;
    }
}