

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

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true }
];

function airlines() {

    let userName = window.prompt('Buenos días!, introduzca su nombre');
    let suma = 0;
    
    while(userName === null || userName.length === 0 || isANumber(Number(userName))) {
        
        let siONo = false;
        if(userName === null) {

            return window.alert('Adios, vuelva pronto');
        }
        else if(userName.length === 0){

            siONo =  window.confirm('No ha ingresado un nombre válido. Si desea continuar, seleccione Aceptar e ingrese su nombre, si desea salir, seleccione Cancelar.')
            
            if(siONo) {

                userName = window.prompt('Buenos días!, introduzca su nombre');

            }else {

                return window.alert('Adios, vuelva pronto');

            }
        }else {

            window.alert('No se pueden ingresar numeros como nombre.');
            siONo =  window.confirm('Si desea continuar, seleccione Aceptar e ingrese su nombre, si desea salir, seleccione Cancelar.')
            if(siONo) {

                userName = window.prompt('Buenos días!, introduzca su nombre');

            }else {
                return window.alert('Adios, vuelva pronto');
            }

        }
    }
  

    window.alert('Bienvenido/a '+ userName + '!');

    showFlights();

    for (e of flights) {
        
        suma = suma + e.cost;
    
    }

    console.log('El coste medio de los pasajes es de: ' + mediaCosto(suma) + '€');

    if(thereAreFlightsWithScale(flights)) {

        console.log('Los siguientes vuelos tienen escala:');

    } else {

        console.log('No hay ningun vuelo con escala.');
    }

    for (e of flights) {

        if(e.scale) {

            console.log('El vuelo con origen: '+ e.from + ',' + 'y destino: ' + e.to + ' que tiene un coste de ' + e.cost + '€');
        }
    }

    console.log('Los destinos de los últimos 5 vuelos del día son:');
    
    let ultimosCincoVuelos = flights.slice(flights.length - 5, flights.length + 1);
    
    
    for (e of ultimosCincoVuelos) {

        console.log(e.to);

    }
    
    let confirmacion = window.confirm('Si eres ADMIN selecciona Aceptar, si eres USER, Cancelar.');
    if(confirmacion){ 

        let salirOSeguir = window.confirm('Desea realizar alguna operacion?');

        while(salirOSeguir) {

            showFlightsWithId();
            let createNewFlight = window.confirm('Desea crear un nuevo vuelo?');

            while(createNewFlight && flights.length < 15) {
                
               let newFlight = createFlight();
                  
                if(typeof newFlight === 'object') {
                    
                    flights.push(newFlight);
                
                }else {
                    console.log(newFlight);
                }
                
                createNewFlight = window.confirm('Desea crear otro vuelo?');
                
            }

            if(flights.length === 15 && createNewFlight ) {
                window.alert('No se pueden agregar mas vuelos, ya hay 15 para el día de hoy.');
            
            }

            let removeFlight = window.confirm('Desea eliminar algun vuelo?');

            while(removeFlight) {
                showFlightsWithId();
                if(flights.length > 0) {
                    
                    let removeId = Number(window.prompt('Ingrese el id del vuelo que desea eliminar'));
                    deleteFlight(removeId);
                    showFlightsWithId();
                    removeFlight = window.confirm('Desea seguir eliminando vuelos?');

                }else{
                    window.alert('No hay ningun vuelo.');
                    removeFlight = false;
                }
                
            }

            console.log(showFlightsWithId());
            salirOSeguir = window.confirm('Desea continuar?');
        }
        return 'Adios!'


    }else{ 
        
        let search = window.confirm('Desea buscar un vuelo?');
        if(!search) {
            return 'Adios';
        }

        while(search) {

            let choose = window.confirm('Si desea ver la lista de vuelos ordenada por precio haga click en Aceptar, Si desea buscar por costo, click en Cancelar.');
            if(choose) {
                let min = window.confirm('Si desea ver la lista ordenada de menor a mayor precio, click en Aceptar, si desea ver la lista de Mayor a Menor, click en Cancelar');
                if(min){
                    
                    showList(flightsMinMax()); 
                    buyFlight();

                }else {
                    
                    showList(flightsmaxMin());
                    buyFlight();
                }

            }else {

                let searchPrice = true;
                while(searchPrice) {

                    let cost = window.prompt('ingrese el costo del vuelo.');
                    searchByCost(cost);
                    searchPrice = window.confirm('Desea ingresar otro costo?');

                }

                buyFlight();
                
            }
        
            search = window.confirm('Desea buscar otro vuelo?');
  
            
        }
            
    }
    return 'Adios, vuelva pronto!';
}


function showFlights() {

    for (e of flights) {
        console.log('El vuelo con origen: '+ e.from + ',' + 'y destino: ' + e.to + ' tiene un coste de ' + e.cost + '€ y ' + hasScale(e.scale));
    } 
}

function showFlightsWithId() {

    let trueOrFalse = false;
    trueOrFalse = window.confirm('Desea ver la lista de vuelos?');
    if(trueOrFalse) {

        for (e of flights) {
            console.log('El vuelo con origen: '+ e.from + ',' + 'y destino: ' + e.to + ' tiene un coste de ' + e.cost + '€, ' + hasScale(e.scale) + ' y su numero de id es: ' + e.id);
        }
    }     
}

function showList(list) {

    for (e of list) {
        console.log('El vuelo con origen: '+ e.from + ',' + 'y destino: ' + e.to + ' tiene un coste de ' + e.cost + '€, ' + hasScale(e.scale) + ' y su numero de id es: ' + e.id);
    }
}


function hasScale(trueOrFalse) {

    if(trueOrFalse) {
        return ' realiza una escala';
    }else {
        return ' no realiza ninguna escala';
    }
}
    



function mediaCosto(total) {
    return total / flights.length;
}



function existeId(num){
    for (e of flights) {
        if(e.id === num){
            return true;
        }
    }
    return false;
    
}


function buyFlight() {

    let buy = window.confirm('Desea comprar un pasaje?');

    while(buy){

        let idNumToBuy = window.prompt('Ingrese el numero de id, del vuelo qe desea comprar');

        if(idNumToBuy === null || idNumToBuy.length === 0 || isNaN(Number(idNumToBuy))) {

            window.alert('No ha ingresado un numero válido');
            buy = window.confirm('Desea ingresar un nuevo numero?');
        }
        else if(existeId(Number(idNumToBuy))) {

            console.log('Gracias por su compra, vuelva pronto');
            buy = window.confirm('Desea seguir comprando?');

        }else {
            
            window.alert('el id ingresado no existe');
            buy = window.confirm('Desea ingresar otro id?');
        }
    }
}




function searchByCost(price) {
    
    if(price === null){

        return window.alert('No ha ingresado ningun valor');

    } 
    else if(isANumber(Number(price)) && price.length > 0) {

        let hayVuelo = false;
        for (e of flights) {

            if(e.cost === Number(price)){
                console.log(vuelosConId([e]));
                hayVuelo = true;
            }
        
        } 
        if(!hayVuelo) {

            return window.alert('no hay ningun vuelo con ese precio.');
        }

    }else {

        return window.alert('Debe ingresar solo numeros');
    } 
    
}

var flightsMinMax = () => flights.slice().sort(function(a,b){return a.cost - b.cost;});

var flightsmaxMin = () => flights.slice().sort(function(a,b){return b.cost - a.cost;});


function thereAreFlightsWithScale(vuelos) {
    let escala = false;
    for (e of vuelos) {
        
        if(e.scale) {
           escala = true; 
           break;
        }
    }
    return escala;
}


function deleteFlight(nroId) {

    if(isANumber(nroId) && esIdValido(nroId)) {

        let eDelete = {};
        for (e of flights) {
            if(e.id === nroId) {
                eDelete = e;
            }
        }
        let indexDelete = flights.indexOf(eDelete);
        flights.splice(indexDelete,1);

    } else {

        window.alert('El numero ingresado no es valido. Puede visualizar la lista a continuacion e ingresar un nuevo id.');
    
    }
}    

function esIdValido(id) {
    
    for (e of flights) {
        if(e.id === id) {
            return true;
        }
    }
    return false;
}
    


function isANumber(n) {

    let esUnNumero = false;
    
        if(typeof n === 'number' && !isNaN(n)){

            esUnNumero = true; 

        }else {

            return false;
        }
    
    return esUnNumero;
}


function createFlight() {
    
    let destination = window.prompt('Ingrese un destino');
    
    while (destination === null || destination.length === 0 || isANumber(Number(destination))) {
        
        let continuar = window.confirm('No ha ingresado un destino válido. Si desea continuar, seleccione Aceptar, si desea anular la operacion, seleccione cancelar');
        if(continuar){

            destination = window.prompt('Ingrese un destino');
        
        }else {

            return 'No se ha creado ningun vuelo';
        }
    }

    let from = window.prompt('Ingrese el origen de vuelo');
    while (from === null || from.length === 0 || isANumber(Number(from))) {
        
        let continuar = window.confirm('No ha ingresado un origen válido. Si desea continuar, seleccione Aceptar, si desea anular la operacion, seleccione cancelar');
        if(continuar){

            from = window.prompt('Ingrese un origen');
        
        }else {

            return 'No se ha creado ningun vuelo';
        }
        
    }

    let cost = window.prompt('Ingrese el costo');
    
    while(cost === null || !isANumber(Number(cost)) || cost.length === 0) {
        
        continuar = window.confirm('No ha ingresado un número válido. Si desea continuar, seleccione Aceptar, si desea anular la operacion, seleccione cancelar');
        
        if(continuar) {

            cost = window.prompt('Ingrese el costo');

        }else{
            return 'No se ha creado ningun vuelo';
        }
    }

    let scale = window.confirm('Si el vuelo tiene escala seleccione Aceptar, sino, Cancelar');

    return {id: assignId(), to: destination, from: from, cost: cost, scale: scale };
    
}

function idsOrdenados(){

    let ids = [];
    for (e of flights) {

        ids.push(e.id);
    }
    return ids.sort(function(a,b){return a - b;});

}

function assignId(){
    
    let ids = idsOrdenados();
    return ids.length;
}


