//*****PROGRAMA******
//Variables globales

var jugadores = [];
//Una vez generado el cartón,se reinicia la lista de numeros aleatorios para controlar de que no se repitan
//los numeros aleatorios durante el juego.
var listaNumerosAleatorios = [];
var cartonJugador = [];
var checkBingo = true;
var continuarTurno = true;
var reiniciarPartida = true;
var lineaEncontrada;
var contLinea = [];
var contBingo = 0;
var turnos = 0;


menuUser();

function menuUser() {
    let salir = false;
    while (!salir) {
        let opcionMenu;
        opcionMenu = parseInt(prompt("BIENVENIDO A BINGO!\n" +
            "1. Reglas de juego\n" +
            "2. Jugar nueva partida\n" +
            "3. Salir"));
        switch (opcionMenu) {
            case 1:
                reglasJuego();
                break;
            case 2:
                let jugarNuevaPartida = true;

                while (jugarNuevaPartida) {
                    restablecerValores();
                    crearJugadores();
                    asignarCarton();
                    cambiarCarton();
                    turno();
                    ranking();
                    jugarNuevaPartida = confirm("Desea jugar una nueva partida?");
                }
                break;
            case 3:
                salir = true;
                alert("Hasta pronto!");
                break;
            default:
                opcionMenu = parseInt(prompt("POR FAVOR INTRODUCE UNA RESPUESTA VÁLIDA"));
        }

    }
}


function crearJugadores() {
    let numJugadores = 0;
    let colorJugador = ["#FFFC5E", "#3AF8E1", "#FF3939", "#9CFF7F", "#A07FFF", "#FF99E5"];
    do {
        numJugadores = prompt("Por favor, introduce el número de jugadores para la partida,  (máximo 6)");

    } while (isNaN(numJugadores) || numJugadores > 6 || numJugadores <= 0 || numJugadores === "");

    for (var i = 0; i < numJugadores; i++) {
        do {
            nombreJugador = prompt("Por favor, introduce el nombre de los jugadores(Campo obligatorio)");
        } while (nombreJugador === "" || !isNaN(nombreJugador))

        jugadores.push(
            {
                nombre: nombreJugador,
                puntos: 100,
                carton: [],
                cambiarCarton: false,
                linea: false,
                bingo: false,
                color: colorJugador[i],
                turnos: 0

            }
        );
    }
}

function asignarCarton() {
    //ESTA FUNCIÓN LE ASIGNA UN CARTÓN A CADA JUGADOR Y DESPUÉS LA MUESTRA
    let fila = [];
    for (var i = 0; i < jugadores.length; i++) {
        for (var j = 0; j < 3; j++) {

            //GENERA EL CARTÓN DE 15 NÚMEROS CON NÚMEROS ALEATORIOS EN UN ARRAY MULTIDIMENSIONAL
            for (m = 0; m < 5; m++) {
                fila.push(
                    {
                        numCarton: numeroAleatorio(),
                        encontrado: false
                    }
                );
            }
            cartonJugador.push(fila);
            fila = [];
        }

        //MUESTRA CARTÓN LA PRIMERA  VEZ PARA PREGUNTAR MAS TARDE SI DESEA CAMBIARLO
        jugadores[i].carton = cartonJugador;
        console.log(jugadores[i].nombre + ", este es tu cartón: ");
        mostrarCarton(i);
        cartonJugador = [];
        listaNumerosAleatorios = [];
    }
}

function mostrarCarton(posicionJugador) {
    cartonJugador = jugadores[posicionJugador].carton;
    console.log('\n');
    console.log('%c Cartón ', 'background: #999; color: #bada55');
    for (let i = 0; i < cartonJugador.length; i++) {
        let printFila = '';
        for (let j = 0; j < cartonJugador[i].length; j++) {
            if (cartonJugador[i][j].encontrado) {
                printFila += 'X ';
            } else {
                printFila += cartonJugador[i][j].numCarton + ' ';
            }
        }
        console.log('%c' + printFila, 'background: #999; color: #bada55');
    }
    console.log('\n');
}

function turno() {

    //ESTA FUNCIÓN CREA UN NUMERO RANDOM Y EJECUTA UN TURNO PARA CADA JUGADOR 
    //COMPRUEBA SI EL NUMERO EXISTE EN EL CARTON, Y SI ES LINEA O BINGO
    while (continuarTurno) {
        continuarTurno = confirm("¿Desea jugar una nueva bola de bingo?");
        if (continuarTurno === false) {
            break;
        }


        numeroTurno = numeroAleatorio();

        console.log('%c BOLA NÚMERO: ' + numeroTurno, 'background: #E79700');
        alert('BOLA NÚMERO: ' + numeroTurno);
        for (var i = 0; i < jugadores.length; i++) {
            console.log('%c Es turno de: ' + jugadores[i].nombre, 'background:' + jugadores[i].color);
            //RECORRE LA LONGITUD DEL ARRAY CARTÓN PARA METERSE EN CADA FILA DEL ARRAY MULTIDIMENSIONAL;
            for (var j = 0; j < 3; j++) {
                for (var m = 0; m < 5; m++) {
                    if (jugadores[i].carton[j][m].numCarton === numeroTurno) {
                        console.log('%c NUMERO ENCONTRADO: ' + jugadores[i].carton[j][m].numCarton, 'background: 0008E7');
                        jugadores[i].carton[j][m].encontrado = true;
                        calcularPuntos(i, 20);
                        m = 4;
                        j = 2;
                    }
                }
            }
            mostrarCarton(i);
            if (!lineaEncontrada) {
                comprobarLinea(i);
            }
            if (checkBingo) {
                comprobarBingo(i);
            } else {
                break;
            }

            console.log("Tus puntos actualizados: " + jugadores[i].puntos + " puntos");
            jugadores[i].turnos++;

        }
    }

}


function numeroAleatorio() {
    //SOLO SE DEBE GENERAR 1 NUMERO ALEATORIO PARA CADA TURNO Y TODOS LOS JUGADORES
    //GENERA UN NUMERO ALEATORIO Y EVITA QUE HAYAN NUMEROS REPETIDOS
    var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    var numRepetido = false;

    while (!numRepetido) {
        if (listaNumerosAleatorios.includes(numeroAleatorio)) {
            numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        } else {
            listaNumerosAleatorios.push(numeroAleatorio);
            numRepetido = true;
        }
    }
    return numeroAleatorio;
}

function cambiarCarton() {
    for (var i = 0; i < jugadores.length; i++) {
        jugadores[i].cambiarCarton = confirm("Hola " + jugadores[i].nombre + ", este es su cartón, desea cambiarlo?")
        while (jugadores[i].cambiarCarton) {
            listaNumerosAleatorios = [];
            let fila = [];

            for (m = 0; m < 3; m++) {
                for (j = 0; j < 5; j++) {
                    var num = numeroAleatorio();
                    fila.push(
                        {
                            numCarton: num,
                            encontrado: false
                        }
                    );
                }
                cartonJugador.push(fila);
                fila = [];
            }
            jugadores[i].carton = cartonJugador;
            //LE ASIGNA EL ARRAY MULTIDIMENSIONAL DE OBJETOS CON LAS PROPIEDADES NUMCARTON Y ENCONTRADO
            mostrarCarton(i);
            cartonJugador = [];
            listaNumerosAleatorios = [];
            jugadores[i].cambiarCarton = confirm("Desea generar otro cartón diferente?");
        }
    }
}





function calcularPuntos(posicionJugador, puntos) {
    //MOSTRAR LOS PUNTOS DE CADA JUGADOR DESPUÉS DE CADA TURNO
    if (puntos === 20) {
        jugadores[posicionJugador].puntos += puntos;
    } else if (puntos === 50) {
        jugadores[posicionJugador].puntos += puntos;
    } else if (puntos === 100) {
        jugadores[posicionJugador].puntos += puntos;
    }
}


function comprobarLinea(posicionJugador) {
    let linea0 = 0;
    let linea1 = 0;
    let linea2 = 0;

    let contadorLineas;

    for (var i = 0; i < jugadores[posicionJugador].carton.length; i++) {
        contadorLineas = 0;
        for (var j = 0; j < jugadores[posicionJugador].carton[i].length; j++) {
            if (jugadores[posicionJugador].carton[i][j].encontrado) {
                contadorLineas++;
            }
        }
        //Termina de revisar la linea
        if (contadorLineas == 5) {
            lineaEncontrada = true;
            console.log('%c **************LÍNEA!!!!*************** ', 'color: #FF1B1B');
            jugadores[posicionJugador].linea = true;
            calcularPuntos(posicionJugador, 50);
            return;
        }
    }
}

function comprobarBingo(posicionJugador) {
    contBingo = 0;
    for (var j = 0; j < 3; j++) {
        for (var m = 0; m < 5; m++) {
            if (jugadores[posicionJugador].carton[j][m].encontrado === true) {
                contBingo++;
            } else {
                contBingo = 0;
            }
        }
    }

    if (contBingo === 15) {
        console.log('%c *****************ENHORABUENA ' + jugadores[posicionJugador].nombre.toUpperCase() + ', HAS HECHO BINGO!!!!***************** ', 'color: #E700B3');
        console.log("Has terminado el cartón en " + jugadores[posicionJugador].turnos + " turnos!");
        jugadores[posicionJugador].bingo = true;
        calcularPuntos(posicionJugador, 100);
        checkBingo = false;
        continuarTurno = false;
        return;
    }
}


function ranking() {
    console.log("------------RANKING PUNTOS/JUGADORES------------\n");

    jugadores.sort((a, b) => {
        if (a.puntos < b.puntos) {
            return 1
        } else {
            return -1
        }
    })

    for (var i = 0; i < jugadores.length; i++) {
        console.log('%c' + jugadores[i].nombre.toUpperCase() + ": " + jugadores[i].puntos + " puntos", 'background:' + jugadores[i].color);
    }

    for (var j = 0; j < jugadores.length; j++) {
        if (jugadores[j].linea === true) {
            console.log('%c El jugador ' + jugadores[j].nombre + " ha hecho línea", 'background:' + jugadores[j].color);
        }
        if (jugadores[j].bingo === true) {
            console.log('%c El jugador ' + jugadores[j].nombre + " ha hecho bingo", 'background:' + jugadores[j].color);
        }
    }


}

function restablecerValores() {
    jugadores = [];
    listaNumerosAleatorios = [];
    cartonJugador = [];
    checkBingo = true;
    continuarTurno = true;
    reiniciarPartida = true;
    lineaEncontrada;
    contLinea = [];
    contBingo = 0;
    turnos = 0;
}

function reglasJuego() {

    alert(" REGLAS DE JUEGO/ SISTEMA DE PUNTOS:\n" +
        "\n" +
        "El programa asignará un color a cada jugador, que se mostrará junto a vuestro nombre en cada turno\n" +
        "-El objetivo del juego es cantar Bingo antes que ningún otro jugador\n" +
        "-Todos los jugadores comenzaréis con 0 puntos.\n" +
        "-Cada vez que taches un número en tu cartón se te sumarán 20 puntos\n" +
        "-Al jugador que haga linea se le sumarán 50 puntos.\n" +
        "-Al jugador que haga bingo se le sumarán 100 puntos.\n" +

        "-Al final de tu turno se te mostrarán tus puntos actualizados.\n" +
        "-Finalmente se mostrará el ranking de puntos entre todos los jugadores.");


}
