//ID=FLT

let name;

let flights = [
    { FLT: 'LF0001', TO: 'Dublin', COST: 250, SCL: false, ETA: '10:00' },
    { FLT: 'LF0002', TO: 'Madrid', COST: 160, SCL: false, ETA: '12:00' },
    { FLT: 'LF0003', TO: 'New York', COST: 500, SCL: true, ETA: '16:00' },
    { FLT: 'LF0004', TO: 'Dusseldorf', COST: 290, SCL: false, ETA: '13:00' },
    { FLT: 'LF0005', TO: 'Malta', COST: 220, SCL: false, ETA: '15:00' },
    { FLT: 'LF0006', TO: 'Istanbul', COST: 400, SCL: true, ETA: '15:30' },
    { FLT: 'LF0007', TO: 'Berlin', COST: 250, SCL: false, ETA: '17:00' },
    { FLT: 'LF0008', TO: 'Copenhaguen', COST: 290, SCL: false, ETA: '17:30' },
    { FLT: 'LF0009', TO: 'Malaga', COST: 250, SCL: false, ETA: '18:00' },
    { FLT: 'LF0010', TO: 'Paris', COST: 250, SCL: false, ETA: '19:00' }
];
name = getName();
selectAdminUser();





function selectAdminUser(){
    let active=true;
    while(active){
        let optionSelection=window.prompt('Seleccionar Admin o User: \n1. Admin \n2. User \n3.Exit.');
        if(optionSelection.toUpperCase()==='ADMIN'||optionSelection==1){
            showWelcomeMessage(name);
            showAdminConfirm();
            adminMenu();
        }else if(optionSelection.toUpperCase()==='USER'||optionSelection==2){
            showWelcomeMessage(name);
            showMeFlightInfo(flights);
            userMenu();
        }else if(optionSelection.toUpperCase()==='EXIT'||optionSelection==3){
            active = exit();
    
    
        }else {
            window.alert('Por favor seleccionar solo entre las opciones nombradas.');
            selectAdminUser();
    
        
        }
        if(active==true){
            active = window.confirm("Desea realizar otra operación?");
        }
        
    }
    

    return 'Gracias'
}
function exit(){
    return false;
}
function showWelcomeMessage(name, adminStatus) {

    console.log('Bienvenido al aeropuerto del Prat ' + name + ' estos son los vuelos disponibles:');
    if (adminStatus) {
        console.log('Estás logeado cómo Admin.');
    }
}

function showMeFlightInfo(flights) {

    for (i = 0; i < flights.length; i++) {
        console.log('El vuelo ' + flights[i].FLT + ' con destino ' + flights[i].TO + ' saldra en breves,con un precio de ' + flights[i].COST);
    }

}
function getName() {
    return window.prompt('Introduce tú nombre:')

}
function showAdminConfirm() {
    return window.confirm('Es usted Admin')
}
function adminMenu() {
    let adminSelection = window.prompt('Selecionar una de las opciones \n 1. add  \n 2. delete  \n 3. list \n 4.Exit');
    if (adminSelection.toUpperCase()==='ADD'||adminSelection==1) {
        addFligths();
        adminMenu();
    } else if (adminSelection.toUpperCase==='DELETE'|| adminSelection==2) {
        
        deleteFlight(selectDeleteFlight());
        adminMenu();
    }  else if (adminSelection.toUpperCase()==='LIST'||adminSelection==3){
        showMeFlightInfo(flights);
        adminMenu();
        
    }else if(adminSelection.toUpperCase()==='EXIT'||adminSelection==4) { 
        selectAdminUser();
    }else{
        (adminSelection===null)
        console.log('Seleccione alguna de las opciones');
        adminMenu();

    }
        
}


function addFligths() {
    if (flights.length < 15) {
        let addedFlight = { FLT: '', TO: '', COST: 0, SCL: false, ETA: '' }
        do {
            addedFlight.FLT = window.prompt('Introduce Flight number:'); 
        } while (addedFlight.FLT.length == 0);
        do {
            addedFlight.TO = window.prompt('Introduce destino:');
        } while (addedFlight.TO.length == 0 || typeof addedFlight.TO !== "string" );
        do {
            addedFlight.COST = parseInt(window.prompt('Introduce coste de vuelo:'));
        } while (addedFlight.COST <= 0 || !addedFlight.COST );
         
        addedFlight.SCL = window.confirm('tiene escala?');
        do {
            addedFlight.ETA = window.prompt('Introduce tiempo de llegada estimado:');
        } while (addedFlight.TO.length == 0 || typeof addedFlight.TO !== "string" );
        flights.push(addedFlight);
        
        if (window.confirm('Desea introducir más vuelos?')) {
            addFligths();
        }

        console.log('Esta es la lista con los vuelos añadidos:')
        showMeFlightInfo(flights);
    } else alert('Límite de vuelos alcanzado.');

}
function selectDeleteFlight() {
    let flightCoincidence = null;
    let cancelFlight = window.prompt('Introducir FLT para borrar vuelo.');

    for (let i = 0; i < flights.length; i++) {
        if (flights[i].FLT == cancelFlight) {
            flightCoincidence = i;
        }
    }
    
    console.log('Esta es la lista de vuelos modificada:')
    
    return flightCoincidence;

}
function deleteFlight(index){

    if (index == null){
        console.log("vuelo no existe")
    }else{
        flights.splice(index,1);
    }
    
    showMeFlightInfo(flights);
    
}
function userMenu(){
    console.log('Seleccionar por nombre o número:')
    let userSelection = window.prompt('Selecionar una de las opciones \n 1. Precio más alto \n 2. Precio mas bajo \n 3. Precio igual \n 4.Compra por ID: \n 5.Exit');
    
    if (userSelection.toUpperCase() ==='ALTO'||userSelection==1) {
       highPrice();
       userMenu();
    } else if (userSelection.toUpperCase()==='BAJO'||userSelection==2) {
        lowestPrice();
        userMenu();

    } else if (userSelection.toUpperCase()==='IGUAL'||userSelection==3){
        equalPrice();
    } else if(userSelection.toUpperCase()==='ID'||userSelection==4){
        buyIdFligths();
    } else if(userSelection==5||userSelection.toUpperCase()==='EXIT'){
        
        selectAdminUser();
    }else{
        (userSelection===null)
        console.log('Seleccione alguna de las opciones')
         userMenu();
    }
        
}
    

       

function buyIdFligths(){
    let IdFlight=null;
    let buyId=window.prompt('Introducir FLT para comprar vuelo:')
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].FLT == buyId) {
            IdFlight= i;
        }
    }
    console.log('Has comprado ' + flights[IdFlight].FLT + ' con destino ' + flights[IdFlight].TO + ' es el vuelo con el precio elegido ' + flights[IdFlight].COST+' Gracias por su compra')

}
function highPrice(){
    flights.sort(function (a, b) {
        if (a.COST < b.COST) {
            return 1;
        }
        if (a.COST > b.COST) {
            return -1
        }
        return 0;
    });
    console.log("----------HIGH to LOW-----------")
    showMeFlightInfo(flights);
    
}
function lowestPrice(){
    flights.sort(function (a, b) {
        if (a.COST > b.COST) {
            return 1;
        }
        if (a.COST < b.COST) {
            return -1
        }
        return 0;
    });
    console.log("---------LOW to HIGH---------")
    showMeFlightInfo(flights);
    
}
function equalPrice(){
    let equalCost=Number.parseInt(window.prompt('Introduce el precio deseado'));
    let equalflight=flights.find(flight=>flight.COST==equalCost);
    
    console.log('El vuelo ' + equalflight.FLT + ' con destino ' + equalflight.TO + ' es el vuelo con el precio elegido ' + equalflight.COST+' Gracias por su compra')
    
}




