//*****PROGRAMA******
//Variables globales

var jugador1;
var cartonJugador1 = [];
//Una vez generado el cartón,se reinicia la lista de numeros aleatorios para controlar de que no se repitan
//los numeros aleatorios durante el juego.
var listaNumerosAleatorios = [];
var continuar;
var reiniciarPartida = true;
var lineaEncontrada;
var contLinea = [];
var contBingo = 0;
var turnos = 0;
var linea0 = [];
var linea1 = [];
var linea2 = [];

alert("Bienvenido a BINGO!");
jugador1 = prompt("Introduce tu nombre, por favor", "jugador 1");


while (reiniciarPartida) {
    inicializarValores();
    generarCarton();
    listaNumerosAleatorios = [];
    alert("Hemos generado su cartón, mucha suerte!");
    mostrarCarton();
    continuar = confirm("Por favor, pulse aceptar para continuar y pasar el turno");
    while (continuar) {
        turnoJugador();
        mostrarCarton();
        comprobarBingo();
    }
    reiniciarPartida = confirm("Ha terminado la partida. ¿Desea volver a jugar una nueva partida?");
}

alert("Hasta pronto! " + jugador1);






function generarCarton(){
    let fila = [];
    for(i = 0; i<3; i++){
        //GENERA EL CARTÓN DE 15 NÚMEROS CON NÚMEROS ALEATORIOS EN UN ARRAY MULTIDIMENSIONAL
        for(j = 0; j<5; j++){
            var num = numeroAleatorio();
            fila.push(
                    {
                        numCarton: num,
                        encontrado: false
                    }
                );   
        }
    cartonJugador1.push(fila);
    fila = [];
    }
    mostrarCarton();
}

function mostrarCarton(){
    console.log('\n');
    console.log('%c Cartón ', 'background: #999; color: #bada55');
    for (let i = 0; i < cartonJugador1.length; i++) {
        let printFila = '';
        for (let j = 0; j < cartonJugador1[i].length; j++) {
            if(cartonJugador1[i][j].encontrado){
                printFila +=  'X ';
            }else{
                printFila +=  cartonJugador1[i][j].numCarton + ' ';
            }
        }
        console.log('%c' + printFila, 'background: #999; color: #bada55');
    }
    console.log('\n');
}

function turnoJugador(){
    let numeroTurno = numeroAleatorio();
    turnos++;
    console.log("Bola número : " + numeroTurno);
    comprobarNumero(numeroTurno);
    if (!lineaEncontrada) {
        comprobarLinea();
    }
    continuar = confirm("Desea continuar jugando?");
}


function numeroAleatorio(){
    //GENERA UN NUMERO ALEATORIO Y EVITA QUE HAYAN NUMEROS REPETIDOS
    var numeroAleatorio = Math.floor(Math.random()*100)+1;
    var numRepetido = false;

    while(!numRepetido){
        if(listaNumerosAleatorios.includes(numeroAleatorio)){
            numeroAleatorio = Math.floor(Math.random()*100)+1;
        }else{
            listaNumerosAleatorios.push(numeroAleatorio);
            numRepetido = true; 
        }
    }
    return numeroAleatorio;
}


function comprobarNumero(numeroTurno){
    for(var i = 0; i < cartonJugador1.length; i++){
        for(var j = 0; j < cartonJugador1[i].length; j++){
            if(cartonJugador1[i][j].numCarton === numeroTurno){
                console.log("%cNumero encontrado : " + numeroTurno, "background: #FFAE00;");
                cartonJugador1[i][j].encontrado = true;
                contBingo++;
                cartonJugador1[i][j].numCarton = "X";
                return
            }
        }
    }
}

function comprobarLinea() {
    let linea0 = 0;
    let linea1 = 0;
    let linea2 = 0;

    let contadorLineas;

    for (var i = 0; i < cartonJugador1.length; i++) {
        contadorLineas = 0;
        for (var j = 0; j < cartonJugador1[i].length; j++) {
            if (cartonJugador1[i][j].encontrado) {
                contadorLineas++;
            }
        }
        //Termina de revisar la linea
        if (contadorLineas == 5) {
            lineaEncontrada = true;
            console.log('%c **************LÍNEA!!!!*************** ', 'color: #FF1B1B');
            return;
        }
    }
}

function comprobarBingo() {
    if (contBingo === 15) {
        console.log('%c ********ENHORABUENA, HAS HECHO BINGO!!!!********* ', 'color: #7FEF08');
        console.log("Has terminado el cartón en " + turnos + " turnos!");
        continuar = false;
        return;
    }
}

function inicializarValores() {
    continuar = true;
    cartonJugador1 = [];
    listaNumerosAleatorios = [];
    lineaEncontrada = false;
    contLinea = [];
    contBingo = 0;
    turnos = 0;
    linea0 = [];
    linea1 = [];
    linea2 = [];
}