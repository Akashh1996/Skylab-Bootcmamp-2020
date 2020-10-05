

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

function realizaEscala(trueOrFalse) {
    if(trueOrFalse) {
        return ' realiza una escala';
    }else {
        return ' no realiza ninguna escala';
    }
}
    

function mediaCosto(total) {
    return total / flights.length;
}

function airlines() {
    let userName = window.prompt('Buenos días!, introduzca su nombre');
    let suma = 0;


    
    while(userName == false || userName === null ) {
        let siONo = false;
        if(userName === null) {
            return window.alert('Adios, vuelva pronto');
        }
        siONo = window.confirm('Si desea continuar, seleccione Aceptar e ingrese su nombre, si desea salir, seleccione Cancelar.')
        if(siONo){
            userName = window.prompt('Buenos días!, introduzca su nombre');
        }else {
            userName = true;
            return window.alert('Adios, vuelva pronto');

        }
    }


    window.alert('Bienvenido/a '+ userName + '!');

    for (e of flights) {
        console.log('El vuelo con origen: '+ e.from + ',' + 'y destino: ' + e.to + ' tiene un coste de ' + e.cost + '€ y' + realizaEscala(e.scale));
    } 

    for (e of flights) {
        
        suma = suma + e.cost;
    
    }
    console.log('El coste medio de los pasajes es de: ' + mediaCosto(suma) + '€');

    if(hayVuelosConEscala(flights)) {
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

}

function hayVuelosConEscala(vuelos) {
    let escala = false;
    for (e of vuelos) {
        
        if(e.scale) {
           escala = true; 
           break;
        }
    }
    return escala;
}