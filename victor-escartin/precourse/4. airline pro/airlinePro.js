/*Programa una interfaz de usuario para una aerolínea (por consola...). Esta aerolínea dispondrá de 10 vuelos para el día de hoy, para empezar, estos vuelos deben estar declarados de manera global, cuando se llame a la función:

● Se preguntará por el nombre de usuario y dará la bienvenida.

● El usuario visualizará todos los vuelos disponibles de una forma amigable : El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.

● A continuación, el usuario verá el coste medio de los vuelos.

● También podrá ver cuántos vuelos efectúan escalas.

● Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.


Pro
Después de ver toda la información el programa pedirá al usuario si es ADMIN/USER, dependiendo de la elección, el programa se comportará de la siguiente manera:

Si eres ADMIN, la función debería permitir:

● Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, si se intenta introducir uno más, saltará un alert().

● Poder eliminar vuelos mediante el ID.

Si eres USER la función debería permitir:

● Buscar por precio (más alto, más bajo o igual), el programa debería mostrar los datos de los vuelos encontrados e, indicando al programa el ID, el programa responderá: "Gracias por su compra, vuelva pronto."
*/
var flight;
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

function airlines(){
    
    var userName=prompt ("Bienvenido! Por favor, introduce tu nombre: "); //● Se preguntará por el nombre de usuario y dará la bienvenida.

    
    if (userName===null) {
        return;
    } else {
        if (userName==="") {
            alert("El campo nombre es obligatorio");
            airlines();
        } else {
            alert ("Bienvenido a Skylab")
        }
    }
    

    console.log("Bienvenido "+userName+"!");
        
    //● El usuario visualizará todos los vuelos disponibles de una forma amigable : El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
    
    var averageCost=0;
    var countFlights=1;
    var scaleFlight=0;
    
    console.log("%cA continuación te mostramos el listado de vuelos disponibles:","color: blue");

    for(i=0; i<flights.length; i++){
        if(flights[i].scale===false){
            console.log("El vuelo con ID:"+flights[i].id+" con origen "+flights[i].from+" y destino "+flights[i].to+" tiene un coste de "+flights[i].cost+".00€ y no realiza escala");
        }else{
            console.log("El vuelo con ID:"+flights[i].id+" con origen "+flights[i].from+" y destino "+flights[i].to+" tiene un coste de "+flights[i].cost+".00€ y tiene programado hacer escala");
            scaleFlight +=1;
        } 
        averageCost += flights[i].cost;
        countFlights +=1;
        
    }

    //● A continuación, el usuario verá el coste medio de los vuelos.

    console.log("%cEl coste medio de los vuelos es:","color: blue");
    console.log((averageCost/countFlights).toFixed(2)+"€."); 

    //● También podrá ver cuántos vuelos efectúan escalas.

    console.log("%cEl total de vuelos de hoy que realizan escala son: ", "color: blue");
    console.log(scaleFlight+" vuelos."); 
        
    console.log("%cA continuación te mostramos los destinos de los últimos 5 vuelos del dia:","color: blue");

    //● Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.
        
    const lastFlights= flights.slice(flights.length-5);
    
    for(l=0; l<lastFlights.length; l++){
        if(lastFlights[l].scale===false){
            console.log("El vuelo con ID:"+lastFlights[l].id+" con salida desde "+lastFlights[l].from+" y destino "+lastFlights[l].to+" tiene un coste de "+lastFlights[l].cost+".00€ y no realiza escala");
        }else{
            console.log("El vuelo con ID:"+lastFlights[l].id+" con salida desde "+lastFlights[l].from+" y destino "+lastFlights[l].to+" tiene un coste de "+lastFlights[l].cost+".00€ y tiene programado hacer escala");
        } 
    }

    typeUser();
}

function typeUser () {      //El programa pedirá al usuario si es ADMIN/USER
    var option=prompt("Indique si es usted ADMIN o USER: ");
    
    if (option===null) {
        return;
    } else {
        option= option.toString();
        option= option.toLowerCase();
        
        switch (option){
            case "admin":
                admin();        //● Poder crear o eliminar vuelos
                break;
            case "user":       //● Buscar por precio (más alto, más bajo o igual), el programa debería mostrar los datos de los vuelos encontrados e, indicando al programa el ID, el programa responderá: "Gracias por su compra, vuelva pronto."
                user();
                break;
            case null:
                return;
            default:
                alert("Por favor, vuelva a indicar si usted es ADMIN o USER");
                typeUser();
        }
    }

}

function admin(){       
                        
    var option=prompt("¿Quiere usted INTRODUCIR vuelos, ELIMINAR vuelos, o SALIR?")
    
    if (option===null) {
        typeUser();
    } else {
        option= option.toString();
        option= option.toUpperCase();
    
        switch (option){
            case "INTRODUCIR":
                introFlight();      //● Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, si se intenta introducir uno más, saltará un alert().
                break;
            case "ELIMINAR":
                deleteFlight();     //● Poder eliminar vuelos mediante el ID.
                break;
            case "SALIR":
                alert("¡Hasta Pronto!") //Finaliza el programa
                break;
            default:
                alert("Por favor, vuelva a indicar si usted quiere INTRODUCIR, ELIMINAR o SALIR (en mayúsculas)");
                admin();
    
        }
    }
   
}

function introFlight(){ 
    
    function newFlight(){
        newF= { id: Number, to: String, from: String, cost: Number, scale: Boolean };
    
        newF.id=Number(prompt("Introduzca número de ID"));
        if (isNaN(newF.id)) {
            alert ("Debe introducir un ID de vuelo numérico");
            introFlight ();
        };
        newF.to=prompt("Introduzca lugar de destino");
        soloLetras(newF.to);
        newF.from=prompt("Introduzca lugar de salida");
        soloLetras(newF.from);
        newF.cost=Number(prompt("Introduzca precio del vuelo"));
        if (isNaN(newF.cost)) {
            alert ("Debe introducir un precio del vuelo numérico");
            introFlight ();
        };
        newF.scale=confirm("Si el vuelo tiene escalas,marque ACEPTAR,de lo contrario marque CANCELAR");
    
        console.log("%cHas introducido el siguiente vuelo:","color:green");

        
        if(newF.scale===false){
            console.log("El vuelo con ID:"+newF.id+" con salida desde "+newF.from+" y destino "+newF.to+" tiene un coste de "+newF.cost+".00€ y no realiza escala");
        }else{
            console.log("El vuelo con ID:"+newF.id+" con salida desde "+newF.from+" y destino "+newF.to+" tiene un coste de "+newF.cost+".00€ y tiene programado hacer escala");
        }

        return newF;
        
    }
    
    
    if (flights.length<15){
        flights.push(newFlight());
        console.log("%cEste es listado actual de vuelos disponibles","color: blue");
        for(i=0; i<flights.length; i++){
            if(flights[i].scale===false){
                console.log("El vuelo con ID:"+flights[i].id+" con origen "+flights[i].from+" y destino "+flights[i].to+" tiene un coste de "+flights[i].cost+".00€ y no realiza escala");
            }else{
                console.log("El vuelo con ID:"+flights[i].id+" con origen "+flights[i].from+" y destino "+flights[i].to+" tiene un coste de "+flights[i].cost+".00€ y tiene programado hacer escala");
            } 
        }
        repeat=confirm("¿Desea introducir más vuelos?");
        admin();

        } else if (flights.length=15){
            newFlight();
            flights.push(flight);
            for(i=0; i<flights.length; i++){
                if(flights[i].scale===false){
                    console.log("El vuelo con origen "+flights[i].from+" y destino "+flights[i].to+" tiene un coste de "+flights[i].cost+".00€ y no realiza escala");
                }else{
                    console.log("El vuelo con origen "+flights[i].from+" y destino "+flights[i].to+" tiene un coste de "+flights[i].cost+".00€ y tiene programado hacer escala");
                } 
            
            alert("Atención,ya no podrá introducir nuevos vuelos si no elimina antes otros");
            admin();
            }
            } else {

                alert("Ha llegado al límite máximo de vuelos, debe eliminar vuelos antes de introducir nuevos")
                admin();
                }
            
}

function deleteFlight(){ 
    var idToDel=Number(prompt("Indique el ID del vuelo a eliminar"));

    if (idToDel===null){
        alert("Por favor, introduzca un número de ID válido");
        deleteFlight();
    } else {
        function delFlight(delNum){
            return delNum.id===idToDel;
            }

        console.log("%cHas eliminado el siguiente vuelo:","color:red");
                
        if(flights.find(delFlight).scale===false){
            console.log("El vuelo con ID:"+flights.find(delFlight).id+" con salida desde "+flights.find(delFlight).from+" y destino "+flights.find(delFlight).to+" tiene un coste de "+flights.find(delFlight).cost+".00€ y no realiza escala");
        }else{
            console.log("El vuelo con ID:"+flights.find(delFlight).id+" con salida desde "+flights.find(delFlight).from+" y destino "+flights.find(delFlight).to+" tiene un coste de "+flights.find(delFlight).cost+".00€ y tiene programado hacer escala");
        }
        flights.splice(flights.findIndex(delFlight),1);

        console.log("%cEste es listado actual de vuelos disponibles","color: blue");

        for(i=0; i<flights.length; i++){
            if(flights[i].scale===false){
                console.log("El vuelo con ID:"+flights[i].id+" con origen "+flights[i].from+" y destino "+flights[i].to+" tiene un coste de "+flights[i].cost+".00€ y no realiza escala");
            }else{
                console.log("El vuelo con ID:"+flights[i].id+" con origen "+flights[i].from+" y destino "+flights[i].to+" tiene un coste de "+flights[i].cost+".00€ y tiene programado hacer escala");
            } 
        }
        admin();
        }
}


function user() {       
    
    flights.sort(function (a,b){    //ordena de menor a mayor precio
    if (a.cost>b.cost){
        return 1;
    }
    if (a.cost<b.cost){
        return -1;
    }
        return 0;
    });

    var findPrice=prompt("Indique el precio máximo a localizar");
    
    var searchFlights=[];
    
    if (findPrice===null){
        var end = confirm ("¿Desea salir?")
        if (end===true) {
            return;
        } else {
            typeUser();
        }
    } else {
        if (findPrice==="") {
            alert("Debe introducir una cantidad para realizar la búsqueda");
            user();
        } else {
            findPrice= Number(findPrice);

        for (var i=0; i<flights.length; i++) {
            if (findPrice>=flights[i].cost) {
                searchFlights.push(flights[i]);
            }
        }
        }
        
    }

    console.log("%cEstos son los vuelos localizados según sus preferencias ordenados por precio:","color:blue");

    for (k=0; k<searchFlights.length; k++){
        console.log("ID:"+searchFlights[k].id+"_ SALIDA: "+searchFlights[k].from+" - DESTINO: "+searchFlights[k].to+"; PRECIO:"+searchFlights[k].cost+"€; ESCALAS: "+searchFlights[k].scale); //vuelos menores del precio indicado por el usuario
    }

    var searchId=Number(prompt("Indique el ID del vuelo a contratar"));

    if (searchId==null || searchId != Number) {
        alert("Por favor, introduzca un ID correcto del vuelo que desea contratar");
        user();
        } else {

            function buyFlight(num){
                return num.id===searchId;
            }

            if (searchFlights.find(buyFlight)==undefined){
                alert("El vuelo indicado no existe o supera el precio solicitado, introduce un ID válido")
                user();
            } else {
                console.log("%cHas contratado el siguiente vuelo:","color:blue");
                console.log((searchFlights.find(buyFlight)).id+"_ SALIDA: "+(searchFlights.find(buyFlight)).from+" - DESTINO: "+(searchFlights.find(buyFlight)).to+"; PRECIO:"+(searchFlights.find(buyFlight)).cost+"€; ESCALAS: "+(searchFlights.find(buyFlight)).scale);
                alert("¡Gracias por su compra, vuelva pronto!") 
                }
            }
}


function soloLetras(e) {

    var numeros="0123456789";

    for(var i=0; i<e.length; i++){
        if (numeros.indexOf(e.charAt(i),0)!=-1){
            alert("El campo de incluir texto, otros valores no son aceptados");
            return introFlight();
        }
     }
}

airlines();