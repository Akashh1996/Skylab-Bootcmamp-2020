/*

PROYECTO TEMA 2. Skylab Airlines! ✈️🛩
Programa una interfaz de usuario para una aerolínea (por consola ...). Esta aerolínea dispone de 10 vuelos para el día de hoy, para comenzar, estos vuelos deben estar declarados de manera global, cuando se llame a la función:

● Se preguntará por el nombre de usuario y darán la bienvenida.
● El usuario visualiza todos los vuelos disponibles de una forma amigable: El vuelo con origen: Barcelona, ​​y destino: Madrid tiene un costo de XXXX € y no realiza ninguna escala.
● A continuación, el usuario verá el costo medio de los vuelos.
● También podemos ver muchos vuelos efectúan escalas.
● Sabiendo que los últimos 5 vuelos (los últimos 5 ID) son los últimos del día, muestra al usuario sus destinos.


Pro
Después de ver toda la información, el programa pedirá al usuario si es ADMINISTRADOR / USUARIO, elección de elección, el programa se comportará de la siguiente manera:

Si eres ADMIN, la función debería permitir:
● Poder crear, más vuelos, pidiendo la información por prompt (), sin poder pasar de 15 vuelos, si se intenta ingresar uno más, saltará una alerta ().
● Poder eliminar vuelos mediante el ID.

Si eres USUARIO, la función debería permitir:
● Buscar por precio (más alto, más bajo o igual), el programa debería mostrar los datos de los vuelos encontrados e, indicar el programa el ID, el programa responderá: "Gracias por su compra, pronto".
*/


var costeMedio = 0;
var contEscalas = 0;
var ultimosDestinos = [];

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

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },]
    

//******************************************************************************/
//FUNCIONES COMUNES USUARIO Y ADMIN

function mostrarVuelos(flights){
  for(var i = 0; i<flights.length; i++){
        let frase = "El vuelo con 'ID' " + flights[i].id + " origen " + flights[i].from.toLocaleUpperCase() + " y destino " + flights[i].to.toLocaleUpperCase() +
        " tiene un coste de " + flights[i].cost + "€."
        if(flights[i].scale){
            console.log(frase + " Este vuelo tiene escalas.")
            contEscalas++;
        }else{
            console.log(frase + " Este vuelo no tiene ninguna escala.");
        }
        costeMedio += flights[i].cost;
    }
}
    
    
function datosVuelos (){
    console.log("El coste medio de los vuelos es de " +(costeMedio/flights.length).toFixed(0) +"€.");
    console.log(contEscalas + " de estos vuelos tienen escalas.");
    costeMedio = 0;
    contEscalas = 0;

    /*
    Bucle que itera sobre los últimos 5 vuelos del día, independientemente de
    la cantidad de vuelos que hayan programados solo mostrará los 5 últimos*/
    
    for(var j = flights.length-5; j<flights.length; j++){
        ultimosDestinos.push(flights[j].to);
    }
    
    console.log('\n'+
    "ESTOS SON LOS DESTINOS DE LOS ÚLTIMOS VUELOS DEL DÍA:\n" +
    ultimosDestinos +'\n');
    ultimosDestinos = [];
}
  
function peticiónUsuario(){
    var usuarioCorrecto = false;
    while(usuarioCorrecto === false){
        var tipoUsuario = prompt("Por favor, indicanos si eres 'ADMIN/USER'");
        
        if(tipoUsuario === "ADMIN" || tipoUsuario === "admin"){
            usuarioCorrecto = true;
            menuAdmin();
        }else if(tipoUsuario === "USER" || tipoUsuario === "user"){
            usuarioCorrecto = true;
            menuUser();
        }else{
            tipoUsuario = alert("Debes introducir un usuario válido");
            usuarioCorrecto = false;
        }
    }

}
   
//************************************************************************************/
//FUNCIONES ADMIN

function menuAdmin(){
    var salir = false;
    while(!salir){
        respuesta = prompt('Que operación deseas realizar?\n'+
        '1. Añadir vuelos.\n'+
        '2. Eliminar vuelos\n'+
        '3. Visualizar vuelos\n' +
        '0. Salir');

        switch(respuesta){
            case '1':
                añadirVuelo();
            break;
           
            case '2':
                eliminarVuelo();
            break;

            case '3':
                mostrarVuelos(flights);
                datosVuelos();
            break;   
            case '0':
                salir = true;
                alert(mensajeDespedida);
            break;
            
            default:
                alert('Por favor, introduce una respuesta válida.');
            break;
        }
    }
}

function añadirVuelo(){

    if(flights.length === 15){
        alert("No puede haber más de 15 vuelos");
    }else{
        let destino;

        do{
            destino = prompt("Introduce el destino del vuelo\n"+
            "(No se permiten valores numericos)");   
            
        }while(destino.match(/\d/) > 0 || (destino.length === 0));
        
        let origen;

        do{
            origen = prompt("Introduce el origen del vuelo\n"+
            "(No se permiten valores numericos)");      
            
        }while(origen.match(/\d/) > 0 || (origen.length === 0));

        let coste = 0; 
        let costeNumerico = false;

        while(!costeNumerico){
            coste = parseInt(prompt("Introduce el coste del vuelo\n" +
            "Solo se pueden introducir números en el precio"));
            if(!isNaN(coste)){
                costeNumerico = true;
            }
    
        }
            
        let escalas = confirm("Este vuelo tiene alguna escala?");


        if(escalas){
            escalas = true;
        }else{
            escalas = false;
        }   
                    
        flights.push({ id: flights[flights.length-1].id+1, to: destino, from: origen, cost: coste, scale: escalas});
        alert("Vuelo añadido con éxito, para visualizar los cambios selecciona la opción '3' del menú.");

    }
}

function eliminarVuelo(){
    let VueloEliminado = prompt("Por favor introduce el ID del vuelo que desea eliminar");
    let idEncontrado = false;
    for(var i = 0; i<flights.length && !idEncontrado; i++){
        if(flights[i].id == VueloEliminado){
            idEncontrado = true;
            let confirmación = confirm("Deseas borrar el vuelo con origen " + flights[i].from + ", destino " + flights[i].to + " y con un coste" +
            " de " + flights[i].cost + "€?");
            if(confirmación){
                VueloEliminado = flights.splice(i,1);
                alert("Vuelo eliminado correctamente, para visualizar los cambios selecciona la opción '3' del menú.");
            }
        }
    }
    if(!idEncontrado){
        alert("No se ha encontrado ningún vuelo con el ID introducido.");
    }
}

//****************************************************************************************************/
//FUNCIONES USUARIO


function menuUser(){
    let salir = false;
    while(!salir){
        var RESULTADO = prompt("Introduce la acción que desea realizar\n"+
        '1. Encontrar vuelos por precio\n'+
        '0. Salir');
        
        switch(RESULTADO){
        case '1':
            menuBusquedaUser();        
        break;

        case '0':
            salir = true;
            alert(mensajeDespedida);
        }
    }
}

function menuBusquedaUser(){
    const BUSQUEDA = prompt('Buscar vuelos por:\n'+
    '1. precio mayor\n'+
    '2. precio menor\n'+
    '3. precio igual\n');

    switch(BUSQUEDA){
        case "1":
            busquedaPrecio("1");    
            break;

        case "2":
            busquedaPrecio("2");
            break;

        case "3":
            busquedaPrecio("3");                  
            break;
    }
}

function busquedaPrecio (buscarPor){

    var precio = 0;
        var resultadobusqueda;
        var fraseResultado;
    

    switch(buscarPor){

        case "1":
            precio = parseFloat(prompt("Introduce el precio minimo para la búsqueda"));
            while(isNaN(precio)){
                precio = parseFloat(prompt("Introduce el precio minimo para la búsqueda\n"+
                "(Solo se pueden introducir números)"));
            }
            
            resultadobusqueda = flights.filter(vuelo => vuelo.cost > precio);
            fraseResultado = "mas alto que ";
            break;
        case "2":
            precio = parseFloat(prompt("Introduce el precio máximo para realizar tu búsqueda"));
            while(isNaN(precio)){
                precio = parseFloat(prompt("Introduce el precio máximo para la búsqueda\n"+
                "(Solo se pueden introducir números)"));
            }
            resultadobusqueda = flights.filter(vuelo => vuelo.cost < precio);
            fraseResultado = "mas bajo que ";
            break;
        case "3":
            precio = parseFloat(prompt("Introduce el precio deseado para buscar vuelos"));
            while(isNaN(precio)){
                precio = parseFloat(prompt("Introduce el precio máximo para la búsqueda\n"+
                "(Solo se pueden introducir números)"));
            }
            resultadobusqueda = flights.filter(vuelo => vuelo.cost === precio);
            fraseResultado = "igual a ";
            break;
    }

        if(resultadobusqueda.length === 0){
            console.log("Lo sentimos, no se han encontrado resultados con precio " + fraseResultado + precio + "€");
        }else{
            resultadobusqueda.sort(function (a, b) {
                return (b.cost - a.cost);
                });
        
                console.log('\n'+
                "Estos son los vuelos con un precio " + fraseResultado + precio + "€"); 
                                    
                mostrarVuelos(resultadobusqueda);
        }

        compraVuelo(resultadobusqueda);
}

function compraVuelo(resultadobusqueda){

    let idCompra = "";
    var compraVuelo = "";

    compraVuelo = prompt("Introduce el ID del vuelo que desea comprar.");
    idCompra = resultadobusqueda.filter(vuelo => vuelo.id == compraVuelo);
        if(idCompra.length === 0){
            alert("ID de vuelo incorrecto!");
         }else{
             alert("Gracias por su compra " + usuario + " , hasta pronto!");
            }
}


//********************************************************************************************************/
//PROGRAMA 

var usuario = "";

while(usuario === ""){
    usuario = prompt("Es obligatorio introducir un nombre de usuario");
}

var mensajeBienvenida = "Bienvenido " + usuario +"!";
var mensajeDespedida = "Hasta pronto " + usuario + "!";
console.log(mensajeBienvenida);

mostrarVuelos(flights);
datosVuelos();
peticiónUsuario();
